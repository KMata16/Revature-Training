import { useRef } from 'react';

const ButtonClicked = () => {

    let count = useRef(0);

    const clickHandler = () => {
        count.current++
        alert(`You have clicked ${count.current} times`)
    }


    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default ButtonClicked;