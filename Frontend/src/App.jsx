import React, { useState } from "react";
// import Counter from './component/Counter'
import Table from "./component/Table";
import FormHandling from "./component/FormHandling";
import { Route, Routes } from "react-router-dom";
import Counter from "./component/Counter";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Error from "./component/Error";
import Langage from "./component/Langage";
import UseEffectInfo from "./component/UseEffectInfo";
import UseContextInfo from "./component/UseContextInfo";
import UseReducerInfo from "./component/UseReducerInfo";
import Home from "./component/home";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="container mt-3">
      <Header/>
      <Routes>
        {/* <div className='container'> */}
        {/* <Counter count={count} setCount={setCount}/>
      <br />
      <input type="number" placeholder='inter a number' onChange={(e)=>{setn(e.target.value)}}/>
      <Table n={n}/> */}
        {/* <FormHandling/>
    </div> */}

        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter count={4}/>} />
        <Route path="/from" element={<FormHandling/>} />
        <Route path="/table" element={<Table n={5}/>} />
        <Route path="/table/:val" element={<Table n={0}/>} />
        <Route path="/query" element={<Langage />} />
        <Route path="/useeffect" element={<UseEffectInfo />} />
        <Route path="/usecontext" element={<UseContextInfo />} />
        <Route path="/usereducer" element={<UseReducerInfo />} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
