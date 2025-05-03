import { useDispatch, useSelector } from "react-redux";
import { ItemCard } from "./RestaurantDetails";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    }

    return (
        <div className="p-4 justify-center">
            <div className="pb-4 flex  justify-between">
                <h1 className="font-bold text-2xl">Cart</h1>
                <button className=" px-2 rounded-lg shadow hover:bg-gray-300"
                    onClick={handleClear}
                >
                    clear cart
                </button>

            </div>
            {
                items.length === 0 && <div> Nothing here to display....</div>
            }
            {
                items.map((item) => (<ItemCard item={item}/>))
            }
        </div>
    )
}

export default Cart;