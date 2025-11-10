import React, { useEffect, useState } from 'react'

const UseEffectInfo = () => {
    
    const [count, setCount] = useState(0);
    let name = "";

    const onIncrement = ()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log(`Counter:${count}`)
    },[name]);

  return (
    <div style={{height: "80vh"}}>
      <h2>use Effect Example</h2>
      <h2>Counter:{count}</h2>
      <button className='btn btn-primary' onClick={onIncrement}>increment</button>
    </div>
  )
}

export default UseEffectInfo
