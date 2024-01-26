import Button from "../MainButton/Button"

import './blog-box.css';

const BoxBlog = ({ blog }) => {
    return (
        <div className="row mt-5 d-flex align-items-center justify-content-between">
            <div className="col-lg-6">
                <div className="blogImage">
                    <img src={blog.image} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-5">
                <div className="d-flex flex-column">
                    <h1 className="fs-5 text-uppercase fw-bold mb-2">
                        {blog.title}
                    </h1>
                    <p className="lh-base">
                        {blog.description}
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
