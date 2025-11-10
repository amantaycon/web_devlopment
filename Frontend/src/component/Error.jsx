import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height: "80vh"}}>
      <h2 className='text-danger'>404 Error: Page not found!</h2>
      <button className='btn btn-success' onClick={()=>{navigate("/",{replace: true})}}>Go to Home</button>
    </div>
  )
}

export default Error;
