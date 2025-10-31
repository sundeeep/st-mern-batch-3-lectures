import { useEffect, useState } from "react";

function TimerCount(){

  const [timerCountInput, setTimerCountInput] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [timerCount, setTimerCount] = useState(timerCountInput);

  function handleTimerCountChange(event){
    console.log("function called!")
    if(event.target.value < 0){
      setTimerCountInput(0);
      return 0;
    }
    setTimerCountInput(event.target.value)
  }

  function handleStartTimer(){
    if(timerCountInput <= 0) {
      alert("Enter positive number and greater than 0 to start the timer")
      return;
    }
  
    setHasTimerStarted(true);
    setTimerCount(timerCountInput)
  }

  useEffect(()=>{
    if(hasTimerStarted){
      setHasTimerStarted(false);
      const interval = setInterval(()=>{
        setTimerCount((previousTimerCount) => {
          if(previousTimerCount <= 0){
            console.log(timerCount)
            clearInterval(interval)
            return 0;
          }
          return previousTimerCount - 1
        })
      }, 1000)
    }
  }, [timerCount])

  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <form className="bg-red-300 rounded-lg p-3">
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="counter">Enter the Timer:</label>
          <input 
            value={timerCountInput}
            onChange={(event) => handleTimerCountChange(event)}
            className="bg-white" id="counter" type="number" />
        </div>

        <div className="flex items-center gap-3">
          <button type="button" onClick={handleStartTimer} className="bg-red-500 text-white p-2">Start</button>
        </div>
      </form>

      <div>
        <p>Time Left: {timerCount}</p>
      </div>
    </div>
  )
}

export default TimerCount;