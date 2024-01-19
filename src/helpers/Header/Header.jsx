import Button from '../MainButton/Button';
import './header.css';

const Header = ({ title, btnDisplat, dir, Btitle }) => {
    return (
        <div className="header position-relative d-flex justify-content-between align-items-center pb-3">
            <h1 className="fs-3 text-uppercase">
                {title}
            </h1>
            <div className={`${btnDisplat}`}>
                <Button dir={dir} Btitle={Btitle} />
            </div>
        </div>
    )
}

export default Header
