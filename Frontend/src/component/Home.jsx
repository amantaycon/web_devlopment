import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
  });

  const addForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [data, form]);

  const addUsers = () => {
    axios
      .post("http://localhost:5000/users", form)
      .then((d) => setForm({ id: "", name: "", email: "" }))
      .catch((error) => console.log(error));
  };

  const updateUser = () => {
    axios
      .put(`http://localhost:5000/users/${form.id}`, form)
      .then((d) => setForm({ id: "", name: "", email: "" }))
      .catch((error) => console.log(error));
  };

  // const [qData, setQData] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products").
  //     then(response => response.json()).
  //     then(data=>setQData(data.products))

  // }, []);
  // console.log(qData);
  return (
    <div className="d-flex flex-column justify-content-center align-item-center">
      {/* <form className="d-flex flex-column"> */}
      <input
        className="w-50 "
        type="text"
        name="id"
        value={form.id}
        onChange={addForm}
        placeholder="Inter Id"
      />

      <input
        className="w-50 "
        type="text"
        name="name"
        value={form.name}
        onChange={addForm}
        placeholder="Enter Name"
      />

      <input
        className="w-50 "
        type="text"
        name="email"
        value={form.email}
        onChange={addForm}
        placeholder="Enter Email"
      />
      <button className="btn btn-warning w-50" onClick={addUsers}>
        AddUsers
      </button>

      <button className="btn btn-warning w-50" onClick={updateUser}>
        Update
      </button>
      {/* </form> */}
      <h2>{data.map((d)=>{
        return (
          <li key={d.id}> {d.id} , {d.name} , {d.email} </li>
        )
      })}</h2>

      {/* <h1>Quotes API</h1>
      <table className="table table-warning">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {qData.map(row => (
            <tr key={row.id}>
            <th>{row.id}</th>
            <th>{row.title}</th>
              <th><img src={row.images[0]} width={200} height={200}></img></th>
              <th><button>Add to Cart</button></th>
            </tr>   
          
            
      ))}
          </tbody>
      </table> */}
    </div>
  );
};

export default Home;
