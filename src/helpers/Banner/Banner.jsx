import banner from '../../assets/images/banner.jpg';
import './banner.css';
const Banner = ({ title, location }) => {
    return (
        <div className='banner position-relative'>
            <div className="image">
                <img src={banner} alt="" className="img-fluid" />
            </div>
            <h1 className="title fs-4 position-absolute text-capitalize">{title}</h1>
            <div className='loca text-capitalize position-absolute p-2 ps-4 pe-4'>
                Home / <span className='loc'>{location}</span>
            </div>
        </div>
    )
}

export default Banner
