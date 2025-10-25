function useState(inputData){
    let stateContent = inputData;

    function setStateContent(newInputData){
        stateContent = newInputData;
    }

    return [stateContent, setStateContent];
}


const [count, setCount] = useState("sundeeep"); // array destructuring

setCount("suresh")
console.log(count)