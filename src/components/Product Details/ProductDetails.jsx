import { useFetcher, useParams } from "react-router-dom"
import products from '../../assets/Data/productsData';
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { cartActions } from '../../Redux/CartSlice/CartSlice';
import ProductCard from '../../helpers/Product Card/ProductCard';
import Banner from "../../helpers/Banner/Banner";
import Helmet from "../../helpers/Helmet/Helmet";

import './product-details.css';
import ReviewsList from "../../helpers/Reviews List/ReviewsList";

const ProductDetails = () => {
    //get the product
    const { id } = useParams();
    const product = products.find((product) => product.id === id)
    const { productName, price, delPrice, image, avgRating, category, tags, stock, reviews } = product;
    //add to cart
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id,
            productName,
            image,
            price,
            delPrice,
            category,
            avgRating
        }
        ))
    }
    //handle the tab action
    const [tab, setTab] = useState("desc")

    //get the related products
    const [related, setRelated] = useState(products)
    useEffect(() => {
        const filteredProducts = products.filter((item) => item.category === category)
        return setRelated(filteredProducts)
    }, [])

    //to the top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    //get the data of the fname input 
    const [fname, setFname] = useState("")
    const handleFname = (e) => {
        const fnameValue = e.target.value;
        return setFname(fnameValue)
    }

    //get the data of the lname input 
    const [lname, setLname] = useState("")
    const handleLname = (e) => {
        const lnameValue = e.target.value;
        return setLname(lnameValue)
    }

    //get the data of stars 
    const [star, setStar] = useState(0)

    //get the data of the textarea
    const [area, setArea] = useState("")
    const handleArea = (e) => {
        const areaValue = e.target.value;
        return setArea(areaValue)
    }

    //handle the form submit 
    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = fname;
        const lastName = lname;
        const starUser = star;
        const text = area;
        const reviewDataUser = {
            firstName,
            lastName,
            starUser,
            text
        }
        // console.log(reviewDataUser)
    }

    return (
        <>
            <Banner title={productName} location="productDetails" />
            <Helmet title="products">
                <div className="productDetails mt-5 mb-5 ">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center mb-5">
                            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                                <div className="image">
                                    <img src={image} alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
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
                                    <div className="d-flex flex-column flex-md-row mb-4 ">
                                        <div className="wishlist btn d-flex align-items-center me-md-5 mb-3 mb-lg-0">
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
                                        <div className="d-flex flex-column flex-lg-row mb-3">
                                            <div className="d-flex me-lg-5 mb-3 mb-lg-0">
                                                <span className="text-capitalize me-1"> category:</span>
                                                <span className="cont text-capitalize"> {category}</span>
                                            </div>
                                            <div className="d-flex">
                                                <span className="text-capitalize me-1"> tags:</span>
                                                <span className="cont text-capitalize">{tags}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex me-lg-4">
                                            <span className="text-capitalize me-1"> stock:</span>
                                            <span className="cont ">{stock} In the stock</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
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

                        <div className="row">
                            {tab === "desc" && (
                                <div className="col-12 col-lg-7 ms-lg-5 mt-4">
                                    <p>{product.description}</p>
                                </div>
                            )}

                            {tab === "rev" && (
                                reviews.map((review, index) => {
                                    return (
                                        <div className="col-12 col-lg-7 mt-4 ms-lg-5 mb-5" key={index}>
                                            <ReviewsList review={review} />

                                            {/* //opinion  */}
                                            <div className="mt-4 ms-3 ms-lg-5">
                                                <h1 className="fs-5 text-capitalize">
                                                    leave your opinion
                                                </h1>
                                                <form action="" className="ms-lg-3 d-flex flex-column" onSubmit={handleSubmit}>
                                                    <div className="d-flex name mt-3">
                                                        <input type="text" name="fname" id="fname" placeholder="Enter your fname"
                                                            className="me-5 p-2 ps-1 w-100" onChange={handleFname} value={fname} />
                                                        <input type="text" name="lname" id="lname" placeholder="Enter your lname"
                                                            className="p-2 ps-1 w-100" onChange={handleLname} value={lname} />
                                                    </div>
                                                    <div className="stars mt-4 mb-4">
                                                        <span className="me-5" onClick={() => setStar(1)}><IoStarSharp /></span>
                                                        <span className="me-5" onClick={() => setStar(2)}><IoStarSharp /></span>
                                                        <span className="me-5" onClick={() => setStar(3)}><IoStarSharp /></span>
                                                        <span className="me-5" onClick={() => setStar(4)}><IoStarSharp /></span>
                                                        <span className="" onClick={() => setStar(5)}><IoStarSharp /></span>
                                                    </div>
                                                    <textarea name="" id="" cols="25" rows="8" placeholder="Write something here"
                                                        className="pt-3 ps-3" onChange={handleArea} value={area}>
                                                    </textarea>
                                                    <div>
                                                        <button type="submit" className="mt-4 p-2 ps-5 pe-5">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                })
                            )}


                        </div>

                        {/* //related products */}
                        <h1 className="fs-3 mt-5 mb-5 fw-bold text-center text-capitalize">
                            related products
                        </h1>
                        <div className="row">
                            {related.map((product, index) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0" key={index}>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Helmet>

        </>
    )
}

export default ProductDetails
