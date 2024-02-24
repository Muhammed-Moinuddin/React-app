const List = (props) => {
    return (
        <>
            {props.data.map((each) => <h2>Key is {each.id} and Brand is {each.brand}</h2>)}
        </>
    )
}

export default List;