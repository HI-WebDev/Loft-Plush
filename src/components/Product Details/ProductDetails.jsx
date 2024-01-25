import { useParams } from "react-router-dom"
import products from '../../assets/Data/productsData';
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from '../../Redux/CartSlice/CartSlice';

import './product-details.css';
import { useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === id)
    const { productName, price, delPrice, image, avgRating, category, tags, stock } = product;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart(
            productName,
            price,
            delPrice,
            image,
            avgRating,
            category,
            tags,
            stock
        ))
    }

    const [tab, setTab] = useState("desc")

    return (
        <div className="productDetails mt-5 mb-5 ">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center mb-5">
                    <div className="col-lg-5 ">
                        <div className="image">
                            <img src={image} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column">
                            <h5 className="title fs-4 fw-bold mb-2">{productName}</h5>
                            <div className="d-flex price mb-2">
                                <span className="fw-bold me-3 fs-5">${price}</span>
                                <del className="fw-bold fs-5">${delPrice}</del>
                            </div>
                            <div className="rate d-flex align-items-center mb-3">
                                <span className="stars me-3">
                                    <IoStarSharp className="me-1" />
                                    <IoStarSharp className="me-1" />
                                    <IoStarSharp className="me-1" />
                                    <IoStarSharp className="me-1" />
                                    <IoStarHalf />
                                </span>
                                <span className="fw-bold">({avgRating} Reviews)</span>
                            </div>
                            <p className="mb-4 pe-lg-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nesciunt provident eaque officiis id totam fugiat itaque
                                esse ullam reprehenderit voluptas ad vitae et maxime mollitia,
                                est deleniti tempora neque doloremque.
                            </p>
                            <div className="d-flex mb-4">
                                <div className="wishlist btn d-flex align-items-center me-5">
                                    <span className="me-2">
                                        <FaRegHeart className=" fw-bold" />
                                    </span>
                                    <span className="text-capitalize">add to wishlist</span>
                                </div>
                                <div className="add">
                                    <div className="btn d-flex align-items-center">
                                        <span className="me-3 text-capitalize fw-bold"
                                            onClick={addToCart}>
                                            add to cart
                                        </span>
                                        <span className="plus d-flex align-items-center justify-content-center">
                                            <FiPlus />
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="supports d-flex flex-column">
                                <div className="d-flex mb-3">
                                    <div className="d-flex me-5">
                                        <span className="text-capitalize me-1"> category:</span>
                                        <span className="cont text-capitalize"> {category}</span>
                                    </div>
                                    <div className="d-flex">
                                        <span className="text-capitalize me-1"> tags:</span>
                                        <span className="cont text-capitalize">{tags}</span>
                                    </div>
                                </div>
                                <div className="d-flex me-4">
                                    <span className="text-capitalize me-1"> stock:</span>
                                    <span className="cont ">{stock} In the stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="tabs d-flex">
                        <div className={tab === "desc" ? "tab active me-5 pb-1" : "tab me-5"}
                            onClick={() => setTab("desc")}>
                            Description
                        </div>
                        <div className={tab === "rev" ? "tab active pb-1" : "tab"}
                            onClick={() => setTab("rev")}>
                            Reviews
                        </div>
                    </div>
                </div>

                {tab === "desc" && (
                    <div className="col-7 mt-4">
                        <p>{product.description}</p>
                    </div>
                )}


                <div className="row mt-5">
                    <h1 className="fs-3 mb-4 fw-bold text-center text-capitalize">
                        related products
                    </h1>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
