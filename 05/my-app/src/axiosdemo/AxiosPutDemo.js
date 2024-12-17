import axios from "axios";
import { useState } from "react";

const AxiosPutDemo = () => {

    const [post, setPost] = useState({
        "userId": 1,
        "id": "",
        "title": "",
        "body": ""
    })

    const handleInput = event => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.put(`http://localhost:8000/posts/${post.id}`, { post })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <h2>Axios Put Demo</h2>
            <form onSubmit={handleSubmit}>
                Post ID:<input type="text" onChange={handleInput} name="id"></input>
                Title: <input type="text" onChange={handleInput} name="title"></input>
                Body: <input type="text" onChange={handleInput} name="body"></input>
                <button>Put</button>
            </form>
        </div>
    )
}

export default AxiosPutDemo;