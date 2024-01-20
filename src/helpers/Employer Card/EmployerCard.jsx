import emp from '../../assets/images/emp.jpg';
import './employer.css';

const EmployerCard = ({ name, func }) => {
    return (
        <div className="employer">
            <div className="card">
                <img src={emp} className="card-img-top" alt="..." />
                <div className="card-body ps-0 mt-1">
                    <h5 className="card-title text-capitalize">{name}</h5>
                    <h5 className="fs-6 mb-0 text-capitalize">{func}</h5>
                    <span className="line mb-3 mt-3"></span>
                    <p className="card-text text-black-50 mt-0">
                        Some quick example text to build on the
                        card title and make up the bulk of the cards content
                        Some quick example text to build on the
                        card title and make up the bulk of the cards content
                    </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default EmployerCard
