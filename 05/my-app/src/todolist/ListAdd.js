import { useState } from "react";

const ListAdd = ({ setList }) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        setList((prevList) => { return [...prevList, value] });
        setValue("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default ListAdd;