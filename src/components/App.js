
import React, { useState } from "react";
import './../styles/App.css';
import Tool from "./Tooltip";
const App = () => {
  const [value,setvalue]=useState(false);
  const [svalue,Setvalue]=useState(false);
  const handleClickenter=()=>{
    setvalue(true);
  }
  const handleClickleave=()=>{
    setvalue(false);
  }
  const handleclickenter=()=>{
    Setvalue(true);
  }
  const handleclickleave=()=>{
    Setvalue(false);
  }
  return (
    <div>
       <Tool value={value} enter={handleClickenter} leave={handleClickleave} svalue={svalue} Enter={handleclickenter} Leave={handleclickleave}/>
    </div>
  )
}

export default App
