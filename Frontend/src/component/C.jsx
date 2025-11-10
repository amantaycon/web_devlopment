import React, { useContext, useState } from "react";
import { Context } from "./UseContextInfo";

const C = () => {
    const {data, setData }= useContext(Context);
    const [ndata, setNdata] = useState("");

    const updatevalue = ()=>{
      setData(ndata, data)
    }

  return (
    <div>
      <h2>C Component </h2><br/>
      Parent Data: { data } <br/>
      <input type="text" onChange={(e)=>{setNdata(e.target.value)}} />
      <button className="btn btn-primary" onClick={()=>updatevalue()}>Change</button>
    </div>
  );
};

export default C;
