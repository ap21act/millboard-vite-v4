import { useSelector } from 'react-redux';

const CartInfo = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h3>Cart Items:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.boardWidth}mm - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartInfo;
