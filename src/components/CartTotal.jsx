import { useContext } from "react";
import { CartContext } from "../context/Cart";

const CartTotal = () => {
    const { cart } = useContext(CartContext)

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
    return (
        <div className="flex justify-center p-4">
            <h3 className="font-bold text-center p-4 text-blue-950 shadow-md w-8/12 border rounded-md bg-sky-200 "> TOTAL: S/. {total}</h3>
        </div>
    )
}

export default CartTotal