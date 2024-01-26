// import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    // const cart = useSelector((state) => state.cart)
    // const dispatch = useDispatch()

    return (
        <div className="cart mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>sds</span>
                            <span>sds</span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-capitalize" scope="col">product name</th>
                                    <th className="text-capitalize" scope="col">quantity</th>
                                    <th className="text-capitalize" scope="col">price</th>
                                    <th className="text-capitalize" scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <div className="col-lg-5"></div>
                </div>
            </div>
        </div>
    )
}

export default Cart
