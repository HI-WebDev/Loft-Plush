import './shopCard.css';

const ShopCard = ({ image, title }) => {
    return (
        <>
            <div className="shopImage position-relative">
                <img src={image} alt="" className="img-fluid" />
                <span className="title fs-3 text-uppercase">{title}</span>
            </div>
        </>
    )
}

export default ShopCard
