import { useDispatch, useSelector } from "react-redux"
import { IoStarSharp } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { cartActions } from '../../Redux/CartSlice/CartSlice';
import './cart.css';
import { useState } from "react";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const quantity = useSelector((state) => state.cart.totalQuantity)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    console.log(cartItems)

    //get the data of the select shipping input
    const [select, setSelect] = useState(1)
    const handleSelect = (e) => {
        const selectValue = e.target.value;
        setSelect(selectValue)
    }

    //get the data of the code promo input
    const [promo, setPromo] = useState("")
    const handlePromo = (e) => {
        const promoValue = e.target.value;
        setPromo(promoValue)
    }


    //handle the submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //handle the total price with the promo code and the shinpping method
    let totalPrice = 0;

    if (totalAmount > 10 && promo === "123") {
        totalPrice = totalAmount - Number(select) - Number(2)
    }
    else if (totalAmount >= 10) {
        totalPrice = totalAmount - Number(select)
    }
    else {
        totalPrice = totalAmount
    }

    return (
        <div className="cart mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="head d-flex align-items-center justify-content-between mb-4 pb-2">
                            <span className="fs-4 fw-bold text-capitalize">shopping cart</span>
                            <span className="fs-5 fw-bold text-capitalize">
                                {quantity}  items
                            </span>
                        </div>
                        {quantity >= 1 ? (
                            <table className="table">
                                <thead>
                                    <tr className="text-uppercase">
                                        <th className="col-4" scope="col-4">product details</th>
                                        <th className="col-1 text-center" scope="col-1">quantity</th>
                                        <th className="col-1 text-center" scope="col-1">price</th>
                                        <th className="col-1 text-center" scope="col-1">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <Tr item={item} key={index} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <div className="noproduct text-capitalize fs-3 fw-bold text-center">
                                no products in the cart
                            </div>
                        )}
                    </div>

                    <div className="col-lg-4">
                        <form className="right d-flex flex-column" onSubmit={handleSubmit}>
                            <h1 className="title fs-4 text-capitalize fw-bold title mb-4 pb-3">
                                order summary
                            </h1>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <span className="fw-bold text-uppercase">items {quantity}</span>
                                <span className="fw-bold text-uppercase">${totalAmount}</span>
                            </div>
                            <div className="shipping d-flex flex-column mb-4">
                                <h1 className="fs-5 text-uppercase mb-3">shipping</h1>
                                <select className="p-2" required onChange={handleSelect} value={select}>
                                    <option value="1">normal delivery - 1$</option>
                                    <option value="3">medium delivery - 3$</option>
                                    <option value="5">fast delivery - 5$</option>
                                    <option value="10">premium delivery - 10$</option>
                                </select>
                            </div>
                            <div className="promo d-flex flex-column mb-3">
                                <h1 className="fs-5 text-uppercase mb-3">promo code</h1>
                                <input type="text" name="" id="" className="p-2" placeholder="Enter your code" onChange={handlePromo} value={promo} />
                            </div>
                            <div className="button mb-4 pb-4">
                                <div className="btn text-uppercase p-1 ps-4 pe-4">
                                    apply
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <span className="fw-bold text-uppercase">total cost</span>
                                <span className="fw-bold text-uppercase">
                                    ${totalPrice}
                                </span>
                            </div>
                            <input type="submit" className="btn text-uppercase" value="CHECKOUT" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Tr = ({ item }) => {
    //delete from cart 
    const dispatch = useDispatch()
    const deleteFromCart = () => {
        dispatch(cartActions.deleteFromCart(item.id))
    }
    return (
        <tr>
            <td className="d-flex align-items-center">
                <div className="cartImage me-2">
                    <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="d-flex flex-column">
                    <span className="title fw-bold text-capitalize ">{item.productName}</span>
                    <div className="category text-capitalize">
                        category :
                        <span className="ms-1">{item.category}</span>
                    </div>
                    <div className="rating text-capitalize d-flex align-items-center">
                        <span className="me-1">{item.avgRating}</span>
                        <IoStarSharp />
                    </div>
                </div>
            </td>
            <td className="text-center">
                {item.quantity > 1 ? (
                    <div>
                        {item.quantity} pieces
                    </div>
                ) :
                    (
                        <div>
                            {item.quantity} piece
                        </div>
                    )}

            </td>
            <td className="text-center">${item.totalPrice}</td>
            <td className="trash text-center" onClick={deleteFromCart}>
                <FaRegTrashCan />
            </td>
        </tr>
    )
}

export default Cart
