import axios from "axios";
import { useState } from "react";

const AxiosDeleteDemo = () => {

    const [post, setPost] = useState({
        "userId": 1,
        "id": ""
    })

    const handleInput = event => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.delete(`http://localhost:8000/posts/${post.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <h2>Axios Delete Demo</h2>
            <form onSubmit={handleSubmit}>
                Post ID:<input type="text" onChange={handleInput} name="id"></input>
                <button>Delete</button>
            </form>
        </div>
    )
}

export default AxiosDeleteDemo;