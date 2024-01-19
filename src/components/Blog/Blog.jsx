import BoxBlog from '../../helpers/Blog Box/BoxBlog';
import Header from '../../helpers/Header/Header';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="blog" btnDisplat="d-block" dir="catalog" Btitle="read" />
                <div>
                    <BoxBlog />
                </div>
                <div>
                    <BoxBlog />
                </div>
                <div>
                    <BoxBlog />
                </div>
            </div>
        </div>
    )
}

export default Blog
