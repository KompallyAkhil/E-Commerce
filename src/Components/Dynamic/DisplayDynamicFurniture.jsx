import React from "react";
import { useParams } from "react-router-dom";
import ProductsNav from "../ProductsNav/ProductsNav";
import dynamic from "./DisplayDynamic.module.css"
import FurnitureData from "../ProductElements/FurnitureData";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DisplayDynamicFurniture = () => {
    const { id } = useParams()
    const { cartItems, addToCart } = useCart()
    const DynamicFurniture = FurnitureData.find(item => item.id === id)
    const cartComponents = cartItems.find(item => item.id === DynamicFurniture.id)
    function AddToMyCart() {
        addToCart(DynamicFurniture)
        toast.success("Added to your Cart")
    }
    return (
        <>
            <ProductsNav />
            <div className={dynamic.container}>
                <img className={dynamic.image} src={DynamicFurniture.ProductImage} alt="" />
                <div className={dynamic.title}>
                    <h5 style={{ fontfamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}><strong>{DynamicFurniture.Title}</strong></h5>
                    <p>{DynamicFurniture.Description}</p>
                    <strong style={{ fontSize: "30px" }}>{DynamicFurniture.Offer}</strong> <span style={{ marginRight: '8px' }}></span> <del style={{ opacity: 0.8 }}>{DynamicFurniture.Price}</del><span style={{ marginRight: '8px' }}></span> <strong style={{ color: "green" }}>{DynamicFurniture.Discount}</strong>
                    <p className={dynamic.rating}>{DynamicFurniture.Rating} ★ </p>
                    <div className={dynamic.buttons}>
                        <button onClick={AddToMyCart} disabled={cartComponents} style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: cartComponents ? "red" : "orange", color: "white", border: "white" }} className={dynamic.btn}>{cartComponents ? "🛒 Already in Cart" : "🛒 Add to Cart"}</button><span></span>
                        <ToastContainer position="top-center" autoClose={5000} transition={Slide} draggable />
                        <Link to='/Furniture'><Button style={{ borderRadius: "16px", height: "55px", width: "250px", backgroundColor: "orange", color: "white", border: "white", marginLeft: "5px" }}>Back To Shopping</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DisplayDynamicFurniture