import { useRef, useState } from "react"

const CounterRef = () => {

    const [counter, setCounter] = useState(0);
    const counterRef = useRef();

    const increment = () => {
        counterRef.current.innerText = Number(counterRef.current.innerText) + 1;
        console.log(counterRef.current.innerText);
        setCounter(counterRef.current.innerText);
    }

    return (
        <>

            <button onClick={increment}>
                <p ref={counterRef}>{counter}</p>
            </button>

        </>
    )

}

export default CounterRef;