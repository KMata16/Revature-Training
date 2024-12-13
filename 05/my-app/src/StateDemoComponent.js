import { useState } from "react";

const StateDemoComponent = () => {
    // let name = "Kevin"
    const [name, setName] = useState("Kevin")
    const [age, setAge] = useState(30)
    const changeName = (inputname, age1) => {
        setName(inputname)
        setAge(age1)
    }
    return (
        <div>
            <h2>{name} is {age} years old</h2>
            <button onClick={() => changeName("Mata", 25)}>Change Name</button>
        </div>
    );
}

export default StateDemoComponent;