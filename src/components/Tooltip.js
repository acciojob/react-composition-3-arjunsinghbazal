import React from "react";

const Tool=({value,enter,leave,svalue,Enter,Leave})=>{
return(
    <div className="tooltiptext" >
      <div onMouseEnter={enter} onMouseLeave={leave}><h1>Hover over me</h1> {value?<p>This is a Tooltip</p>:null}</div>
      <div onMouseEnter={Enter} onMouseLeave={Leave}><h1>Hover over me to see another Tooltip</h1> {svalue?<p>This is a Tooltip of another toolkit</p>:null}</div>
    </div>
)
}


export default Tool;