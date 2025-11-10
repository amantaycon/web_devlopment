import React, { useReducer } from "react";

const UseReducerInfo = () => {
  const initiaState = { color: "#00000", size: "30px" };
  const reducer = (state, action) => {

    switch (action.color || action.size) {
      case "red":
        return (state = { color: action.color, size: action.size });
      case "green":
        return (state = { color: action.color, size: action.size });
      case "blue":
        return (state = { color: action.color, size: action.size });
      case "50px":
        return (state = { ...state, size: action.size });
    }
  };
  const [color, dispatch] = useReducer(reducer, initiaState);

  return (
    <div style={{ height: "80vh" }}>
      <h2 style={{ color: color.color, fontSize: color.size }}>
        UseReducer Example
      </h2>
      <button
        className="btn btn-primary m-1"
        onClick={() => dispatch({ color: "blue", size: "30px" })}
      >
        Blue
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => dispatch({ color: "red", size: "40px" })}
      >
        Red
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => dispatch({ color: "green", size: "45px" })}
      >
        Green
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => dispatch({ size: "50px" })}
      >
        50px Size
      </button>
    </div>
  );
};

export default UseReducerInfo;
