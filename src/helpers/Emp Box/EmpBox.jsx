import emp from '../../assets/images/team.jpg';
import './emp-box.css';


const EmpBox = ({name}) => {
    return (
        <>
            <div className="empBox d-flex flex-column text-center">
                <div className="empImage mt-2 mb-3">
                    <img src={emp} alt="" className="img-fluid" />
                </div>
                <h1 className="fs-6 fw-bold mb-2">{name}</h1>
                <span className='desc text-black-50'>
                    Lorem ipsum dolor sit amet
                </span>
            </div>
        </>
    )
}

export default EmpBox
