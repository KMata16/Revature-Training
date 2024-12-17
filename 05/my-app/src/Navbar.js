import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>React Demos</h2>
            <div className="links">
                <Link to="/hello">Hello</Link>
                <Link to="/sdc">State Demo</Link>
                <Link to="/getposts">Event Demo</Link>
                <Link to="/todolist">To Do List</Link>
                {/* <Link to="/post">Post</Link>
                <Link to="/delete">Delete</Link>
                <Link to="/put">Put</Link> */}
                <Link to="/click">Click</Link>
                <Link to="/text">Text</Link>
            </div>
        </div>
    )
}

export default Navbar;