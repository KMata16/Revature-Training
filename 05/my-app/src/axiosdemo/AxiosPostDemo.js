import axios from "axios";
import { useState } from "react";

const AxiosPostDemo = () => {

    const [post, setPost] = useState({
        "userId": 1,
        "id": "1",
        "title": "",
        "body": ""
    })

    const handleInput = event => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:8000/posts", { post })
            .then(res => console.log(res))
    }

    return (
        <div>
            <h2>Axios Demo</h2>
            <form onSubmit={handleSubmit}>
                Title: <input type="text" onChange={handleInput} name="title"></input>
                Body: <input type="text" onChange={handleInput} name="body"></input>
                <button>Post</button>
            </form>
        </div>
    )
}

export default AxiosPostDemo;