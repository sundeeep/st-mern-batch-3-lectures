// "React needs a way to run side effects after render"
/**
 * I. When you click the browser refresh button:
 * 1. The entire react app is destroyed.
 * 2. The browser reloads the HTML, JS, and CSS files from scratch.
 * 3. React starts again from the beginning.
 * 4. All component states (useState) are reset to their initial values.
 * 
 * Think of it like turning off and on your phone - everything starts fresh.
 */

/**
 * II. What happens when a component re-renders?
 * A re-render happens inside your React app -> not by the browser
 * 
 * React re-renders when:
 * 1. A state change (setCount(...))
 * 2. A prop change (something passed from parent)
 * 3. A context value changes // later concept
 * 
 * During a re-render:
 * 1. The component function runs again.
 * 2. React builds a new virtual DOM.
 * 3. React compares it with the previous one and updates only what changed.
 * 
 * it's like redrawing only one frame in a video/ painting/ photo. -> not restarting the whole movie.
 */

/**
 * What about useEffect in each?
 * Case 1: Page Refresh
 * 1. React "mounts" your component again (it's a new start)
 * 2. All the effects with useEffect(()=>{}) run again because the component mounted fresh. 
 * 
 * These effects will run once every time "you refresh the page", because the component mounts fresh.
 * 
 * Case 2: Re-render inside React
 * 1. If your useEffect has dependencies, React check them.
 * 2. It runs after every render when count/ name has changed.
 * 
 * If your dependency array is empty [], it will not run again during re-renders , only runs on mount.
 * 
 */

import { useState, useEffect } from "react";

function UseEffectHook() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log("No Dependency Array useEffect's callback")
    })

    useEffect(() => {
        console.log("UseEffect Callback 1 has been triggered!");
    }, [])

    useEffect(() => {
        console.log("Effect 2")
    }, [])

    useEffect(() => {
        console.log("Effect 3")
    }, [])

    useEffect(()=>{
        console.log("Count is updated: ", count);
    }, [count]) // [] -> dependency array

    useEffect(()=>{
        console.log("Name is updated: ", name)
    }, [name])


    function incrementCount() {
        setCount((prevCount) => prevCount = prevCount + 1);
    }


    return (
        <>
            <p>Count: {count}</p>


            <button className="bg-red-500 p-3 text-white"
                onClick={incrementCount}>
                Increment
            </button>

            <input type="text"
                placeholder="Enter name..."
                className="bg-gray-200"
                value={name}
                onChange={(event) => setName(event.target.value)} 
            />
        </>
    )
}

export default UseEffectHook;

// render -> painting the dom on the browser