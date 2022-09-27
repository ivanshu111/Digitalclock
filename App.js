import react, { useState } from 'react'
import './App.css'
const App=()=>{
  let time =new Date().toLocaleTimeString()
  const [ctime,settime]=useState(time)

  const updatetime=()=>{
    time =new Date().toLocaleTimeString()
    settime(time)

  }
  setInterval(updatetime,1000)
  return <div className='div'> <h1>{ctime}</h1></div>
}
export default App;