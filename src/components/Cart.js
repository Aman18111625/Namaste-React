import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearItems = () => {
    dispatch(clearItems());
    navigate("/"); // redirect to home after checkout
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
      <div className="w-6/12 m-auto border border-gray-300 p-4">
        <button className="bg-black text-white p-2 rounded-lg m-2 cursor-pointer" onClick={() => handleClearItems()}>
          Checkout
        </button>
        {cartItems.length === 0 ? (
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
