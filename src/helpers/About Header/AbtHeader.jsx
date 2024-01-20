
const AbtHeader = ({ title, span }) => {
    return (
        <>
            <h1 className='fs-3 text-capitalize mb-4 text-center mb-5'>
                {title} <span className='t-color fw-bold'>{span}</span>
            </h1>
        </>
    )
}

export default AbtHeader
