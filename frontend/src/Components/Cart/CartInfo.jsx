import { useSelector } from 'react-redux';

const CartInfo = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h3>Cart Items:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            {item.name} - {item.boardWidth}mm - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartInfo;
