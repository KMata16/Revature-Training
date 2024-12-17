import { useContext } from "react";
import TextComponent from "./hoc/TextComponent";
import MyContext from "./contextdemo/MyContext";

const Hello = (props) => {
    const theData = useContext(MyContext)
    return (
        <div>
            <h2>Hello Functional Component</h2>
            <p>Hello World from Hello Component...... {props.firstName}  -------- {props.lastName}</p>
            <hr />
            <TextComponent />
            <h2>Data From Context :::: {theData}</h2>
        </div>
    )
}

export default Hello;