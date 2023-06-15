import React from "react";

const Tool=({value,enter,leave,svalue,Enter,Leave})=>{
return(
    <div >
      <div className="tooltiptext" onMouseEnter={enter} onMouseLeave={leave}><h2 className="tootip">Hover over me</h2> {value?<p className="tootip">This is a Tooltip</p>:null}</div>
      <div className="tooltiptext" onMouseEnter={Enter} onMouseLeave={Leave}><h2 className="tootip">Hover over me to see another Tooltip</h2> {svalue?<p className="tootip">This is a Tooltip of another toolkit</p>:null}</div>
    </div>
)
}


export default Tool;