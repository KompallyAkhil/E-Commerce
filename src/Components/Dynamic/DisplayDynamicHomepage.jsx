import React from "react";
import { useParams } from "react-router-dom";
import Homedata from "../Home/Homedata";
import dynamic from "./DisplayDynamic.module.css"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DisplayDynamicHHomepage = () => {
    const { id } = useParams();
    const { cartItems, addToCart } = useCart()
    const DynamicHomeProduct = Homedata.find(item => item.id === id);
    const cartComponents = cartItems.find(item => item.id === DynamicHomeProduct.id)
    function AddToMyCart() {
        addToCart(DynamicHomeProduct)
        toast.success("Added to your Cart")
    }
    return (
        <>
            <div className={dynamic.container}>
                <img className={dynamic.image} src={DynamicHomeProduct.ProductImage} alt="" />
                <div className={dynamic.title}>
                    <h5 style={{ fontfamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}><strong>{DynamicHomeProduct.Title}</strong></h5>
                    <p>{DynamicHomeProduct.Description}</p>
                    <strong style={{ fontSize: "30px" }}>{DynamicHomeProduct.Offer}</strong> <span style={{ marginRight: '8px' }}></span> <del style={{ opacity: 0.8 }}>{DynamicHomeProduct.Price}</del><span style={{ marginRight: '8px' }}></span> <strong style={{ color: "green" }}>{DynamicHomeProduct.Discount}</strong>
                    <p className={dynamic.rating}>{DynamicHomeProduct.Rating} ★ </p>
                    <div className={dynamic.buttons}>
                        <button onClick={AddToMyCart} disabled={cartComponents} style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: cartComponents ? "red" : "orange", color: "white", border: "white" }} className={dynamic.btn}>{cartComponents ? "🛒 Already in Cart" : "🛒 Add to Cart"}</button><span></span>
                        <ToastContainer position="top-center" autoClose={5000} transition={Slide} draggable />
                        <Link to='/'><Button style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: "orange", color: "white", border: "white", marginLeft: "5px" }}>Back To Shopping</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DisplayDynamicHHomepage