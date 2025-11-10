import React, { useState } from "react";
import A from "./A";

export const Context = React.createContext();

const UseContextInfo = () => {
  const [data, setData] = useState("hello How are you");

  return (
    <div style={{ height: "80vh" }}>
      <h2>Use Context Info</h2><br/>
      parentdata: {data}
      <Context.Provider value={{data, setData}} set>
        <A />
      </Context.Provider>
    </div>
  );
};

export default UseContextInfo;
