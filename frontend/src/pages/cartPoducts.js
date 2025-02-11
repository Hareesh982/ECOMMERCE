import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import React from "react";

function CartDetails(){
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
    const taxes = useSelector(state => state.cart.taxes);
    const grandTotal = useSelector(state => state.cart.grandTotal);

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Cart Details</h2>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <p className="text-lg font-semibold">Total Items: {cartCounter}</p>
                    <p className="text-lg">Total Price: {totalPrice.toFixed(2)}</p>
                    <p className="text-lg">Delivery Charges: {deliveryCharges.toFixed(2)}</p>
                    <p className="text-lg">Taxes: {taxes.toFixed(2)}</p>
                    <p className="text-lg font-bold">Grand Total: {grandTotal.toFixed(2)}</p>
                </div>
                <h3 className="text-xl font-semibold mt-6">Items in Cart</h3>
                <ul className="mt-2">
                    {cartItems.length > 0 ? cartItems.map((item, index) => (
                        <li key={index} className="border-b py-2">
                            {item.name - item.price.toFixed(2) * item.quantity}
                        </li>
                    )) : <p className="text-gray-500">No items in the cart.</p>}
                </ul>
            </div>
        </>
    );
}

export default CartDetails

