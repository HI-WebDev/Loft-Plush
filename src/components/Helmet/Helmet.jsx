
const Helmet = (props) => {
    document.title = "Loft Plush -" + props.title

    return <div>
        {props.children}
    </div>
}

export default Helmet
