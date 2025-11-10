import React from 'react'
import { useParams } from 'react-router-dom';

function Table({n}) {
  const urlParam = useParams();
  n = n || parseInt(urlParam.val);

  if(!Number.isInteger(n)){
    return <h1>Please insert number value</h1>
  }
  

    // const tab = (n) => {
  //   let list = [];
  //   for (let i = 1; i <= 10; i++) {
  //     list.push(
  //       <li key={i}>
  //         {n} * {i} = {n * i}
  //       </li>
  //     );
  //   }
  //   return list;
  // };

  const t = Array(10).fill(0);

  return (
    <div>
      {Array.from({length: 10}, (_, index) =>(
        <p key={index+1}>
            {n} X {index+1} = {(n*(index+1))}
        </p>
      ))}
    </div>

    // <div>
    //     <ul>
    //         {/* {tab(n)} */}
    //         {t.map((_, index)=>(
    //           <p key={index+1}>
    //             {n} X {index+1} = {(n*index)}
    //           </p>
    //         ))}
    //     </ul>
    // </div>
  )
}

export default Table;
