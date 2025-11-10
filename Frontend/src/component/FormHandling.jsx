import React, { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [record, setRecord] = useState([]);

  const addLanguage = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang([...lang, value]);
    } else {
      setLang(lang.filter((item) => item !== value));
    }
  };

  const displayInfo = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("Please confirm first!");
      return;
    }

    let rec = {
      id: Date.now(),
      name,
      email,
      age,
      gender,
      lang,
      country,
      confirm,
    }

    setRecord([...record, rec]);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {/* <Counter count={count} setCount={setCount}/>
      <br />
      <input type="number" placeholder='inter a number' onChange={(e)=>{setn(e.target.value)}}/>
      <Table n={n}/> */}
      <h4
        className="btn mt-3 btn-warning text-light"
        style={{ width: "48%", fontSize: "25px" }}
      >
        Form Handling
      </h4>
      <form
        onSubmit={displayInfo}
        className="d-flex flex-column mb-3 w-50 border border-2 p-4 rounded rounded-4 border-warning"
      >
        <input
          className="m-1"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name"
          required
        />
        <input
          className="m-1"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
          required
        />
        <input
          className="m-1"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Enter Age"
          required
        />

        <h4>Select Gender</h4>
        <div>
          <input
            className="m-1"
            name="gender"
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <b>Male</b> <br />
          <input
            className="m-1"
            name="gender"
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <b>Female</b>
        </div>

        <h4>Select your language</h4>
        <div>
          <input
            type="checkbox"
            name="Hindi"
            value={"Hindi"}
            onChange={(e) => addLanguage(e)}
            // checked={lang.find((e) => e == "Hindi")}
          />{" "}
          <b>Hindi</b>
          <br />
          <input
            type="checkbox"
            name="English"
            value={"English"}
            onChange={(e) => addLanguage(e)}
            // checked={lang.find((e) => e == "English")}
          />{" "}
          <b>English</b>
          <br />
          <input
            type="checkbox"
            name="French"
            value={"French"}
            onChange={(e) => addLanguage(e)}
            // checked={lang.find((e) => e == "French")}
          />{" "}
          <b>French</b>
        </div>

        <h4>Select your country: </h4>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value={""}>Select country</option>
          <option value={"India"}>India</option>
          <option value={"USA"}>USA</option>
          <option value={"Uk"}>England</option>
        </select>

        <div className="mt-3">
          <input
            type="checkbox"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />{" "}
          <b className="bx-2">Do you agree to submit?</b>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-success w-50 mt-3" type="submit">
            Save
          </button>
        </div>
      </form>
      {record.length > 0 && (
        <div className="w-100">
          <table className="table table-bordered table-strippled table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Country</th>
                <th>Agreement</th>
              </tr>
            </thead>

            <tbody>
              {record.map((r) => (
                <tr key={r.id}>
                  <th>{r.id}</th>
                  <th>{r.name}</th>
                  <th>{r.email}</th>
                  <th>{r.age}</th>
                  <th>{r.gender}</th>
                  <th>{r.lang.join(", ")}</th>
                  <th>{r.country}</th>
                  <th>{r.confirm}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FormHandling;
