import React, { useState } from 'react'

const Counter = ({count, setCount}) => {

  return (
    <div className='container mt-3'>
      <button className='btn btn-primary' onClick={()=>{setCount(count-1)}}>Decrement</button>
      <b className='m-2' style={count<0?{color: 'red', fontWeight: 'bold'}:{color: 'green', fontWeight: 'bold'}}>{count}</b>
      <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Counter;
