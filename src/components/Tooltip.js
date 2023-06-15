import React from "react";

const Tool=({value,enter,leave,svalue,Enter,Leave})=>{
return(
    <div >
      <div className="tooltiptext" onMouseOver={enter} onMouseLeave={leave}><h1>Hover over me</h1> {value?<p className="tootip">This is a Tooltip</p>:null}</div>
      <div className="tooltiptext" onMouseOver={Enter} onMouseLeave={Leave}><h1>Hover over me to see another Tooltip</h1> {svalue?<p className="tootip">This is a Tooltip of another toolkit</p>:null}</div>
    </div>
)
}


export default Tool;