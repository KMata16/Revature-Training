const Hello = (props) => {
    return (
        <div>
            <h2>Hello Functional Component</h2>
            <p>Hello World from Hello Component...... {props.firstName}  -------- {props.lastName}</p>
        </div>
    )
}

export default Hello;