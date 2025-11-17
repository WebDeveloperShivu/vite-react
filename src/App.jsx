import { useState } from "react"

function Apple(){
  const [counter,setCounter]=useState(0)
  return (
    <div>
      <h1>Counter Value : {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Incress Value</button>
      <button onClick={()=>setCounter(counter-1)}>Decress Value</button>
    </div>
  )
}
export default Apple