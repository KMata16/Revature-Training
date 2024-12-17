import { useEffect, useState } from "react";
import CommentDisplayComponent from "./CommentDisplayComponenet";


const ListandKeysComponent = () => {
    const [comments, setComments] = useState([
        {
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
        },
        {
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
        },
        {
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
        }
    ])
    const handleDelete = (id) => {
        const newComment = comments.filter(comment => comment.id !== id);
        setComments(newComment)
    }

    const [name, setName] = useState("John");

    useEffect(() => {
        console.log("use Effect called...")
    }, [name])

    return (
        <div>
            <h2>List and Keys</h2>
            <CommentDisplayComponent comments={comments} handleDelete={handleDelete} />
            <button onClick={() => setName("Jack")}>Change Name</button>
        </div>
    );
}

export default ListandKeysComponent;