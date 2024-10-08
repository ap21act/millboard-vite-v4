import XLSX from 'xlsx';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from '../Models/Products/index.js'; // Your Product model
import slugify from 'slugify';
import { DB_NAME } from '../constants.js';

// Load environment variables
dotenv.config();

// Increase the timeout setting for Mongoose
mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 30000); // 30 seconds to avoid buffering timeout

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const connectionString = `mongodb+srv://paudeladarsha111:YZSkFn2oeURnEWJO@cluster0.vwmcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/${DB_NAME}`;
    console.log("Attempting to connect to MongoDB with URI:", connectionString);
    
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      connectTimeoutMS: 30000,
    });

    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};


// Load the Excel file using xlsx library
const workbook = XLSX.readFile('../public/MongoDB Millboard.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const productsData = XLSX.utils.sheet_to_json(worksheet);

// Insert product data into MongoDB without images
const importProducts = async () => {
  console.log("Starting product import...");

  for (const product of productsData) {
    try {
      // Destructure the product data
      const { name, description, colour, type, category, subCategory } = product;

      // Initialize an empty array for boardSpecifications
      const boardSpecifications = [];

      // Iterate over the product keys to reconstruct boardSpecifications
      for (const key in product) {
        if (key.startsWith('boardSpecifications[')) {
          // Extract the index and field name from the key
          const match = key.match(/boardSpecifications\[(\d+)\]\.(\w+)/);
          if (match) {
            const [_, index, field] = match;
            const parsedIndex = parseInt(index, 10);

            // Ensure there's an object at the specified index
            if (!boardSpecifications[parsedIndex]) {
              boardSpecifications[parsedIndex] = {};
            }

            // Assign the value to the correct field in boardSpecifications
            boardSpecifications[parsedIndex][field] = product[key];
          }
        }
      }

      // Generate the slug using the product details
      const slug = `${slugify(category, { lower: true })}/${slugify(subCategory, { lower: true })}/${slugify(type, { lower: true })}/${slugify(name, { lower: true })}`;

      // Construct the productData object to insert into MongoDB
      const productData = {
        name,
        description,
        colour,
        type,
        category,
        subCategory,
        slug,
        boardSpecifications, // Already reconstructed as an object, no need to parse it
      };

      // Insert or update the product in MongoDB
      const productCollectionCreate = await Product.findOneAndUpdate(
        { slug },
        { $set: productData },
        { new: true, upsert: true }
      );

      console.log('Product imported successfully:', productCollectionCreate.slug);
    } catch (error) {
      console.error('Error importing product:', product.name, error);
    }
  }

  console.log("Product import completed.");
};

// Connect to MongoDB and then start the product import
const startImportProcess = async () => {
  await connectDB(); // Await to make sure MongoDB is connected before starting import
  await importProducts(); // Await to ensure the import runs synchronously

  // Close the MongoDB connection after import
  console.log("Closing MongoDB connection...");
  mongoose.disconnect();
};

startImportProcess().catch(err => {
  console.error("Error during product import process:", err);
  mongoose.disconnect();
});
