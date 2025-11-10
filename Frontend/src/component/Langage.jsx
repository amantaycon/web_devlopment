import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Langage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState("");

  const addQuery = ()=>{
    setSearchParam({info: query})
  }

  return (
    <div style={{ height: "80vh" }}>
      <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
      <button className="btn btn-primary" onClick={addQuery}>Search</button>
      <SearchData info={searchParam.get("info")} />
    </div>
  );
}

const SearchData = ({ info }) => {
  switch (info) {
    case "java": return <h2>this is java</h2>
    case "python": return <h2>this is python</h2>
    case "react": return <h2>this is React JS</h2>
    default: return <h2>not valid</h2>
  }
};
export default Langage;
