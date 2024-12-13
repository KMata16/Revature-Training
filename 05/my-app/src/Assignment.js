/*Other assignment located in App.js */
const Assignment = (props) => {
    const commentList = props.comment;
    return (
        <div>
            <h1>Message Board</h1>
            <hr />
            <h2>{props.content}</h2>
            <h3>Comments:</h3>
            {commentList.map(com => (
                <li>
                    {com}
                </li>
            ))}
        </div>
    );
}

export default Assignment;