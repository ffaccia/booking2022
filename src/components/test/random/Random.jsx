import React, { useState, useEffect } from "react";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function useRandomNumberEverySecond(max = 1000) {
    const [number, setNumber] = useState(getRandomInt(max));

    useEffect(() => {
        const interval = setInterval(() => setNumber(getRandomInt(max)), 1000);
        return () => clearInterval(interval);
    }, [max]);

    return number;
}

function RandomNumberWrapper({ setState }) {
    //console.log(setStte)
    const number = useRandomNumberEverySecond();
    document.querySelector("#displayNumberh4").textContent = number;

    useEffect(() => {
        setState(number);
    }, [setState, number]);

    return null;
}

const Random = () => {
    const [isHookActive, setIsHookActive] = useState(false);
    const [number, setNumber] = useState(0); 
    const [number2, setNumber2] = useState(0);
    console.log(setNumber2)
    return (
        <div className="App">
            <h1>Bending the Rules of Hooks</h1>
            <button onClick={() => setIsHookActive(!isHookActive)}>Click to toggle custom hook usage</button>
            <h4>{isHookActive ? `hook output is: ${number}` : "hook is not active"}</h4>
            {isHookActive && <RandomNumberWrapper setState={setNumber} />}
            <h4 id="displayNumberh4"></h4>
        </div>
    );
}

export default Random