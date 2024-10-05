import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Carts from "./UserCart.module.css"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
const UserCart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart()
    let Total = 0
    let OfferPrice = 0
    for (let i = 0; i < cartItems.length; i++) {
        let price = parseInt(cartItems[i].Offer.slice(1).replace(",", ""))
        let Offer = parseInt(cartItems[i].Price.slice(1).replace(",", ""))
        Total += price
        OfferPrice += Offer
    }
    let Discount = ((OfferPrice - Total) / OfferPrice) * 100
    let Savings = (OfferPrice - Total)
    function AddToCart(event) {
        if (cartItems.length !== 0) {
            toast.success(`Your order of  ₹${Total} has been placed successfully`)
        }
        else {
            toast.warn("Please Shop Now 🥹")
            event.preventDefault()
        }
    }
    return (
        <>
            <h3 className={Carts.Heading}>{cartItems.length === 0 ? "Your Cart is Empty" : "My Cart"}</h3>
            <div style={{ display: cartItems.length === 0 ? "none" : "block" }}>
                <div className={Carts.MainTable}>
                    <table className={Carts.table} >
                        <thead style={{ border: "2px solid black" }}>
                            <tr className={Carts.productBill}>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td >
                                        <div className={Carts.productInfo}>
                                            <img className={Carts.image} src={item.ProductImage} alt={item.Title} />
                                        </div>
                                    </td>
                                    <td><strong>{item.Title}</strong></td>
                                    <td style={{ textAlign: "center" }} ><strong>{item.Offer}</strong></td>
                                    <td>
                                        <Button onClick={() => removeFromCart(item)}>
                                            Remove 🗑️
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className={Carts.Billtable}>
                        <thead style={{ fontFamily: "fantasy", fontSize: "25px", letterSpacing: "1px" }}>Price Details</thead>
                        <tr>
                            <td className={Carts.tds}>Total Price :</td>
                            <td className={Carts.del} ><del>₹ {OfferPrice}</del></td>
                        </tr>
                        <tr>
                            <td className={Carts.tds} >Discount Price :</td>
                            <td className={Carts.discount}><strong>₹ {Total}</strong></td>
                        </tr>
                        <tr>
                            <td className={Carts.tds} >Savings :</td>
                            <td className={Carts.savings}><strong>₹ {Savings}</strong></td>
                        </tr>
                        <tr>
                            <td className={Carts.tds}>Discount :</td>
                            <td className={Carts.discount}><strong>{(Discount).toFixed(2)}%</strong></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={Carts.Cartbtn}>
                <Link to='/products'><Button style={{ backgroundColor: "orange", color: "white", border: "white", }} className={Carts.linkbtn}>{cartItems.length === 0 ? "Shop Now" : "Back to Shopping"}</Button></Link>
                <button onClick={AddToCart} className={Carts.Cartbtns} >Place Order</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    transition={Slide}
                    draggable
                />
            </div>
        </>
    )
}
export default UserCart