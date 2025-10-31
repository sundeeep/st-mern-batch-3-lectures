import { useEffect, useState } from "react";

function TimerApp() {
  const [count, setCount] = useState(0);

  // setInterval(()=>{
  //   setCount((prevCount) => prevCount + 1)
  // }, 1000)

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }, [])

  return (
    <>
      <p>Count : {count}</p>
    </>
  )
}

export default TimerApp;