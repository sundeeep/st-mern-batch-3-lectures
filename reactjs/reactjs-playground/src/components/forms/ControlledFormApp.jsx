import { useState } from "react";

function ControlledFormApp() {

    let displayNameFromLogInWithGoogle = "Sundeeep Dasari";
    let emailFromLogInWithGoogle = "sundeepdev@gmail.com";

    const [name, setName] = useState(displayNameFromLogInWithGoogle);
    const [email, setEmail] = useState(emailFromLogInWithGoogle);
    const [age, setAge] = useState();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            age: age
        }
        console.log(data)
    }

    return (
        <form className="p-6 bg-green-300 rounded-2xl borded-2 border-green-600 flex flex-col gap-3 items-center" 
            onSubmit={(event) => handleFormSubmit(event)}>
            <input className="bg-white placeholder-gray-400"
                onChange={(event) => setName(event.target.value)}
                type="text"
                value={name} // controlled input
                placeholder="Enter Name"
                required
            />

            <input className="bg-white placeholder-gray-400" 
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Enter Email"
                required
            />

            <input className="bg-white placeholder-gray-400" 
                type="number"
                onChange={(event) => setAge(event.target.value)}
                value={age}
                placeholder="Enter Your Age"
                required
            />

            <button className="bg-red-600 text-white hover:bg-red-500" type="submit">Register</button>
        </form>
    )
}

export default ControlledFormApp;