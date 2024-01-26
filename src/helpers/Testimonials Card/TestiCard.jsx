import './testi-card.css';

const TestiCard = ({ testi }) => {
    return (
        <>
            <div className="testiCard pt-4 pb-2 p-4">
                <div className="d-flex align-items-center mb-4">
                    <div className="image me-3">
                        <img src={testi.image} alt="" className="img-fluid" />
                    </div>
                    <div className="d-flex flex-column">
                        <h1 className="fs-5 mb-1 text-uppercase">{testi.name}</h1>
                        <span>{testi.function}</span>
                    </div>
                </div>
                <p className='lh-base'>
                    {testi.description}
                </p>
            </div>
        </>
    )
}

export default TestiCard
