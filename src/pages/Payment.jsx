import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import { data } from "autoprefixer"
import CartTotal from "../components/CartTotal"
function Payment() {

    const [cart, setCart] = useState([])
    const [orderNUmber, setOrderNumber] = useState(null)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'))
        const storedOrder = JSON.parse(localStorage.getItem('order_number'))
        if (storedCart) {
            setCart(storedCart)
        }

        if (storedOrder) {
            setOrderNumber(storedOrder)
        }
    }, [])


    const payment = () => localStorage.removeItem('cart')


    return (
        <>
            <section className="bg-[url('./public/imagen/four-cordel-socks.jpeg')]">
                {orderNUmber && (
                    <div className='w-4/6 mx-auto pt-20 pb-10'>
                        <h1 className='text-left text-3xl font-semibold mb-3 bg-sky-600 rounded-md p-4'>CHECKOUT PEDIDO</h1>
                        <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
                            <div className="">
                                <p className="text-left text-lg font-semibold bg-emerald-500 p-4 sm:w-2/3 lg:w-1/3 items-center">Pedido N°: {orderNUmber}</p>
                            </div>
                            <h3 className="text-left text-xl border-b-2 font-semibold p-4">Datos del Pedido</h3>
                            <article >
                                <div className="flex flex-col gap-4 mb-4 p-4">
                                    <span className="font-semibold"><strong>Nombre:</strong> Primer Cliente</span>
                                    <span className="font-semibold"><strong>Fecha del pedido:</strong> ###</span>

                                </div>
                                <h3 className="text-left font-semibold p-4  border-b-4">Resumen del Pedido</h3>
                                <ul className="">
                                    <li className="lg:grid lg:grid-cols-5 sm:grid-cols-1 sm:text-left sm:gap-2 lg:text-center font-semibold p-6  border-b-4 hidden">
                                        <p>Foto</p>
                                        <p>Nombre</p>
                                        <p>Cantidad</p>
                                        <p>Precio Unitario</p>
                                        <p>Precio Total</p>
                                    </li>
                                </ul>
                                {cart.map((product, index) => (
                                    <ul key={index}>
                                        <li className="grid lg:grid-cols-5 sm:grid-cols-1 sm:text-left sm:gap-1 gap-1 lg:text-center font-semibold p-6  border-b-4 sm:text-xs lg:text-sm"
                                        >
                                            <img className="w-10 items-center ml-12" src={product.image} />
                                            <p className="text-center">{product.name}</p>
                                            <p className="text-center">{product.quantity}</p>
                                            <p className="text-center">S/.{product.price} </p>
                                            <p className="text-center">S/.{product.quantity * product.price}</p>
                                        </li>
                                    </ul>
                                ))}

                                <div className="">
                                    <CartTotal />
                                </div>
                                <div className="flex justify-end text-right mt-6 p-4">
                                    <button className="bg-yellow-400 p-2 text-xs font-semibold"
                                        onClick={payment}>EFECTUAR EL PAGO</button>
                                </div>
                            </article>

                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </>
    )
}

export default Payment