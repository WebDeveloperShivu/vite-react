import { useState } from "react"
import Header from "./Header"
import Banner from "./Banner"

// function Apple(){
//   const [counter,setCounter]=useState(0)
//   return (
//     <div>
//       <Header/>
//       <Banner/>
//       <h1>Counter Value : {counter}</h1>
//       <button onClick={()=>setCounter(counter+1)}>Incress Value</button>
//       <button onClick={()=>setCounter(counter-1)}>Decress Value</button>
//     </div>
//   )
// }

function Counting(){
  const [number , setNumber] = useState(0)
  return(
    <div>
      <Car/>
      <h1>Counting Value : {number}</h1>
      <button onClick={()=>setNumber(number+2)}>+2</button>
      <button onClick={()=>setNumber(number-2)}>-2</button>

    </div>
  )
}


function Car(){
  return(
    <div>
      <h1>shiva</h1>
    </div>
  )
}
export default Counting