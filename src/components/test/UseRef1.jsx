import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export const AppRef1 = () => {
    const [wWidth, setWidth] = useState(window.innerWidth);
    const previousInputValue = useRef("");
    const renderCount = useRef(0)
    const val=0

    const setResize = () => {
        setWidth(window.innerWidth)
    } 

    useEffect(() => {
        window.addEventListener("resize", setResize)
    },[])

    return (
        <>
            <h1>{wWidth}
            </h1>
        </>
    )


/*    
    useEffect(() => {
        console.log(resourceValue)
        //document.querySelector("h1").value = resourceValue
    }, [val]) 

return (
    <>
        <div>
            <button onClick={(e) => setResourceType(e.target.textContent)}>Post</button>
            <button onClick={(e) => setResourceType(e.target.textContent)}>User</button>
            <button onClick={(e) => setResourceType(e.target.textContent)}>Comment</button>

            <h1>{resourceValue}</h1>
        </div>
    </>
)
*/
    /*
    useEffect(() => {
        console.log("inputValue: ", inputValue)
        console.log("preinputValue: ", previousInputValue.current)
        previousInputValue.current = inputValue;
        renderCount.current +=1;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Number of re-rendering: {renderCount.current}</h2>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
*/

/*
    return (
        <>
            <button
                onClick={(e) => settaValue(-1)}
            >-</button>
            <span>{value}</span>
            <button
                onClick={(e) => settaValue(1)}
            >+</button>
        </>
    );
*/

}