import {useState} from "react";

function JokeApiProject(){

  const [setUp, setSetUp] = useState("No Setup"); // hook is just a function...
  const [punchLine, setPunchLine] = useState("No PunchLine")

  async function fetchJoke(){
    try {
      const response = await fetch("https://official-joke-api.JokeApiProjectspot.com/random_joke");
      const data = await response.json();
    //   console.log(data);
    //   console.log(data.setup)
      setSetUp((previousState)=>(previousState = data.setup))
      setPunchLine(data.punchline)

    } catch (error) {
      console.error(error);
    }
  }
  
  return(
    <div className="p-12">
      <button onClick={fetchJoke} className="bg-red-500 hover:bg-red-600 cursor-pointer px-4 py-2 text-white font-semibold rounded-xl">Get Joke</button>
      <p className="text-red-600 font-semibold text-lg">{setUp}</p>
      <p>{punchLine}</p>
    </div>
  )
}

export default JokeApiProject;