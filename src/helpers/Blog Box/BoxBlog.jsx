import Button from "../MainButton/Button"
import blog from '../../assets/images/blog.png';

import './blog-box.css';

const BoxBlog = () => {
    return (
        <div className="row mt-5 d-flex align-items-center justify-content-between">
            <div className="col-lg-6">
                <div className="image">
                    <img src={blog} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-5">
                <div className="d-flex flex-column">
                    <h1 className="fs-5 text-uppercase fw-bold mb-2">
                        the ultimate sofa buying guide
                    </h1>
                    <p className="lh-base">
                        The versatility of our living space is more crucial than ever.
                        But buying a sofa might be a difficult undertaking.
                        Your needs and the size of your living area will determine
                        everything. However, dont worry; we are here to help you.
                    </p>
                    <div className="link d-flex justify-content-end mt-4 pb-2">
                        <Button Btitle="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxBlog
