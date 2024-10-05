import React from "react";
import { useParams } from "react-router-dom";
import ProductsNav from "../ProductsNav/ProductsNav";
import dynamic from "./DisplayDynamic.module.css"
import FashionData from "../ProductElements/FashionData";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DisplayDynamicFashion = () => {
    const { id } = useParams()
    const { cartItems, addToCart } = useCart()
    const DynamicFashion = FashionData.find(item => item.id === id)
    const cartComponents = cartItems.find(item => item.id === DynamicFashion.id)
    function AddToMyCart() {
        addToCart(DynamicFashion)
        toast.success("Added to your Cart")
    }
    return (<>
        <ProductsNav />
        <div className={dynamic.container}>
            <img className={dynamic.image} src={DynamicFashion.ProductImage} alt="" />
            <div className={dynamic.title}>
                <h5 style={{ fontfamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}><strong>{DynamicFashion.Title}</strong></h5>
                <p>{DynamicFashion.Description}</p>
                <strong style={{ fontSize: "30px" }}>{DynamicFashion.Offer}</strong> <span style={{ marginRight: '8px' }}></span> <del style={{ opacity: 0.8 }}>{DynamicFashion.Price}</del><span style={{ marginRight: '8px' }}></span> <strong style={{ color: "green" }}>{DynamicFashion.Discount}</strong>
                <p className={dynamic.rating}>{DynamicFashion.Rating} ★ </p>
                <div className={dynamic.buttons}>
                    <button onClick={AddToMyCart} disabled={cartComponents} style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: cartComponents ? "red" : "orange", color: "white", border: "white" }} className={dynamic.btn}>{cartComponents ? "🛒 Already in Cart" : "🛒 Add to Cart"}</button><span></span>
                    <ToastContainer position="top-center" autoClose={5000} transition={Slide} draggable />
                    <Link to='/Fashion'><Button style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: "orange", color: "white", border: "white", marginLeft: "5px" }}>Back To Shopping</Button></Link>
                </div>
            </div>
        </div>
    </>)
}
export default DisplayDynamicFashion