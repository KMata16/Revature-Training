const EventDemoComponent = () => {
    const handleClick = () => {
        console.log("Hello Event")
    }
    const handleClickAgain = (name) => {
        console.log("Hello Event " + name)
    }
    return (
        <div>
            <h2>Events Demo</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain("Kevin")}>Click Me Again</button>
        </div>
    );
}

export default EventDemoComponent;