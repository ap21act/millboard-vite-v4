import React from 'react'
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb'
import Hero from '../../../Components/Accessories/Hero'
import TitleWithDetails from '../../../Components/Accessories/TitleWithDetails'

const titlesData = [
    {
      subtitle: 'Corner Profile',
      title: 'Shadow Line+ External Corner Profile',
      description: (
        <p>
          Euroclass D fire rated profile used with the Shadow Line+ boards to finish off the external corner of a building, fixed with the perforated closure and 20mm fixings.
          <br /><br />
          Construction: Fire rated flexible polymer resin
          <br /><br />
          Size: 50x50x3050mm
          <br />
          <br />
          Colour options:
          <br />
          Smoked Oak - MCFE50D<br /> Antique Oak - MCFE50A <br />Golden Oak - MCFE50G<br /> Burnt Cedar - MCFE50R<br /> Limed Oak - MCFE50L<br /> Sage Green - MCFE50N<br /> Salt Blue - MCFE50T
        </p>
      ),
      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369396/products/cladding/accessories/MCFE50R_Shadow_Line_Plus_External_Corner_Profile_Burnt_Cedar_Corner_Display.jpg',
    },
    {
      subtitle: 'Corner Profile',
      title: 'Shadow Line+ Internal Corner Profile',
      description: (
        <p>
          Euroclass D fire rated profile used with the Shadow Line+ boards to finish off the internal corner of a building, fixed with the perforated closure and 20mm fixings.
          <br /><br />
          Construction: Fire rated flexible polymer resin
          <br /><br />
          Size: 38x38x3050mm
          <br /><br />
          Colour options:
          <br />
          Smoked Oak - MCFH38D<br /> Antique Oak - MCFH38A<br /> Golden Oak - MCFH38G<br /> Burnt Cedar - MCFH38R<br /> Limed Oak - MCFH38L<br /> Sage Green - MCFH38N<br /> Salt Blue - MCFH38T
        </p>
      ),
      
      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369398/products/cladding/accessories/MCFH38R_Shadow_Line_Plus_Internal_Corner_Profile_Burnt_Cedar_Corner_Display.jpg'
    },
    {
      subtitle: 'Reveal Boards',
      title: 'Envello Reveal Boards',
      description: (
        <p>
          Envello Reveal Boards are Euroclass D fire rated and should be used as the finishing edge around windows/doors with the Shadow Line+ and Board & Batten+ boards. Fixed with the Envello Coloured Head Screws.
          <br /><br />
          Construction: Polymer Resin Core / Fire rated elastomer surface layer
          <br /><br />
          Size: 146x3600x16mm
          <br /><br />
          Colour options:
          <br />
          Smoked Oak - MCRI46D<br /> Antique Oak - MCRI46A<br /> Golden Oak - MCRI46G<br /> Burnt Cedar - MCRI46R<br /> Limed Oak - MCRI46L<br /> Sage Green - MCRI46N<br /> Salt Blue - MCRI46T<br /> Jarrah - MCRI46J
        </p>
      ),
      
      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369401/products/cladding/accessories/MCR146D_Reveal_Board_Smoked_Oak_Cameo_Window_Reveal_2.jpg'
    },
    {
      subtitle: 'Corner Trim',
      title: 'Envello Square Corner Trim',
      description: (
        <p>
          Euroclass D fire rated profile used with the Board & Batten+ boards to finish off the external corner of a building, fixed with the perforated closure and 20mm fixings.
          <br /><br />
          Construction: Fire rated flexible polymer resin
          <br /><br />
          Size: 50x3050x50mm
          <br /><br />
          Colour options:
          <br />
          Smoked Oak - MCPTF50D<br /> Antique Oak - MCPTF50A<br /> Golden Oak - MCPTF50G<br /> Burnt Cedar - MCPTF50R<br />Jarrah - MCPTF50J<br /> Limed Oak - MCPTF50L
        </p>
      ),
      
      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369404/products/cladding/accessories/MCR146D_Reveal_Board_Smoked_Oak_Cameo_Window_Reveal_3.jpg'
    },
    {
      subtitle: 'Screws',
      title: 'Envello Coloured Head Screws',
      description: (
        <p>
          Specifically designed to be used through the face of the Shadow Line+ and Board & Batten+ cladding boards when it isn't possible to fix through the tongue of the board.
          <br /><br />
          Construction: A2 Stainless Steel
          <br /><br />
          Size: 3.5 x 40mm
          <br /><br />
          Colour Options:
          <br />
          Smoked Oak - FC40P100D<br /> Antique Oak - FC40P100A<br /> Golden Oak - FC40P100G<br /> Burnt Cedar - FC40P100R<br /> Limed Oak - FC40P100L<br /> Jarrah - FC40P100J<br /> Sage Green - FC40P100N<br /> Salt Blue - FC40P100T
        </p>
      ),
   
      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369386/products/cladding/accessories/FC40P100_Envello_Board_Batten_Coloured_Head_Screws.jpg'
    },
    {
      subtitle: 'Starter Trim',
      title: 'Vertical Starter Trim',
      description: (
        <p>
          Used to start the cladding at the bottom when the cladding is fixed vertically. Fixed with the perforated closure and 20mm fixings.
          <br /><br />
          Construction: Aluminium
          <br /><br />
          Size: 25x13x2500mm
          <br /><br />
          Product code: GT250L
        </p>
      ),

      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369393/products/cladding/accessories/GT250L_Vertical_Starter_Trim.jpg'
    },
    {
      subtitle: 'Starter Trim',
      title: 'Horizontal Starter Trim',
      description: (
        <p>
          Trim used to start the cladding at the bottom when the cladding is fitted horizontally. Fixed with the perforated closure and 20mm fixings.
          <br /><br />
          Construction: Aluminium
          <br /><br />
          Size: 25x10x2500mm
          <br /><br />
          Product code: GT250J
        </p>
      ),

      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369391/products/cladding/accessories/GT250J_Horizontal_Starter_Trim_J_Profile.jpg'
    },
    {
      subtitle: 'Closure Trim',
      title: 'Perforated Closure Trim',
      description: (
        <p>
          Used to prevent insects and rodents from getting into the ventilated cavity behind the boards while allowing airflow. Fixed at the bottom of the cladding with the starter trim, also at the top on its own, as well as with the corner profiles. Fixed with the 20mm fixings.
          <br /><br />
          Size: 25x50x3000mm
          <br /><br />
          Product Code: GP300L
        </p>
      ),

      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369388/products/cladding/accessories/GP300L_Perforated_Closure_Trim.jpg'
    },
    {
      subtitle: 'Fixings',
      title: 'Cladding Board Fixings',
      description: (
        <p>
          Used to fix cladding boards onto the battens through the tongue on the board.
          <br /><br />
          Construction: A2 Stainless Steel
          <br /><br />
          Size: 3.5x30mm
          <br /><br />
          Product code: FC30P250
        </p>
      ),

      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369383/products/cladding/accessories/FC30P250_Cladding_Board_Fixing.jpg'
    },
    {
      subtitle: 'Fixings',
      title: 'Cladding Accessories Fixings',
      description: (
        <p>
          Used to fix the corner profiles, starter trims, and perforated closures.
          <br /><br />
          Construction: A2 Stainless Steel
          <br /><br />
          Size: 3.5x20mm
          <br /><br />
          Product code: FC20P250
        </p>
      ),

      imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1730369381/products/cladding/accessories/FC20P250_Cladding_Accessories_Fixing.jpg'
    },
  ];
  

function CladdingAccessories() {
  return (
    <div>
        <Breadcrumb
        category="cladding"
        subCategory="accessories"
        type="Cladding-accessories"
        name={name}
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Cladding"
        name="Accessories"
        description="Attention to detail can make all the difference in the success of your cladding project. That's why we offer a range of premium cladding accessories designed to enhance the aesthetics, durability, and functionality of your installation."
      />
      {titlesData.map((item, index) => (
        <TitleWithDetails
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          head={item.head}
          subHead={item.subHead}  // Passing the subHead prop
          description={item.description}
          imageUrl={item.imageUrl}
          isEven={index % 2 === 0}  // Alternating layout automatically
        />
      ))}
    </div>
  )
}

export default CladdingAccessories