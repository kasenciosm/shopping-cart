
import { useCart } from '../hooks/useCart';
import CartTotal from '../components/CartTotal';
import CheemsSad from '/imagen/cheems-sad.png'
import { FaTrash } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';




function CartItems({ image, price, name, quantity, addToCart, removeFromCart, subtractCart }) {
    return (
        <li className='text-left flex justify-between gap-4 mb-4 items-center shadow-md pr-4 pl-4 py-8'>
            <article className='flex gap-4 items-center'>
                <img
                    src={image}
                    alt={name}
                    className='aspect-1 w-20 shadow-lg'
                />
                <strong>{name}</strong>
                <p>Und.  S/.{price}</p>
            </article>

            <section className='flex lg:gap-10 sm:gap-12 items-center'>
                <span className='text-xs'>
                </span>
                <div className='flex lg:flex-row flex-col-reverse gap-2 items-center text-sm pr-4'>
                    <button
                        onClick={subtractCart}
                    >
                        <FaSquareMinus size={25} style={{ color: 'slategray' }} />
                    </button>
                    <span className='text-sm font-semibold '>
                        {quantity}
                    </span>
                    <button
                        onClick={addToCart}
                    >
                        <FaSquarePlus size={25} style={{ color: 'slategray' }} />
                    </button>
                </div>
                <button
                    onClick={removeFromCart}>
                    <FaTrash size={25} style={{ color: 'rgb(30 41 59)' }} />
                </button>
            </section>
        </li>
    )
}

export default function Cart() {
    const { cart, clearCart, addToCart, removeFromCart, subtractCart } = useCart()

    return (
        <>
            <h1 className='text-center text-3xl text-slate-800 font-bold p-10 border-b-2 mb-10'>Tu Carrito amigo Sock-ete </h1>
            <div className='max-w-screen-xl m-auto w-full px-6 pb-10'>
                <ul>
                    {cart.map(product => (
                        <CartItems key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                            removeFromCart={() => removeFromCart(product)}
                            subtractCart={() => subtractCart(product)} />
                    ))}
                    {cart.length > 0 ? (
                        <span>
                            <CartTotal />
                            <div className='flex justify-center items-center text-center gap-6 pt-4'>
                                <Link to='/payment'>
                                    <button
                                        className='font-bold bg-yellow-400 px-2 py-2 text-center mt-3 rounded-md'>
                                        Ir a pagar
                                    </button>
                                </Link>
                            </div>
                        </span>
                    ) : (
                        <div className='flex flex-col justify-center gap-10 items-center'>
                            <span className='text-center font-semibold text-lg'>
                                El carrito esta vacio
                            </span>
                            <img className='aspect-16/9 w-96' src={CheemsSad} />
                            <Link to='/shop'
                                className='font-bold bg-yellow-400 px-2 py-2 text-center mt-3 rounded-md'>
                                Ir a la Tienda
                            </Link>
                        </div>
                    )}

                </ul>
            </div>
            <Footer />
        </>
    )
}