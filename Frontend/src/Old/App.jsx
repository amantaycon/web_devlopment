import Header, { SubHeader } from "./component/Header";
import Content, { Aman, Kiet, Mca } from "./component/Content";
import Footer from "./component/Footer";

function App() {
  // let lan = [
  //     {id: 1, lang: "C"},
  //     {id: 2, lang: "C++"},
  //     {id: 3, lang: "Java"},
  //     {id: 4, lang: "JavaScript"},
  //     {id: 5, lang: "python"}
  //   ]

  // let n1 = 20;
  // let n2 = 30;
  return (
    <>
      <div>
        {/* <h1>Sum = {n1 + n2}</h1>
        <h1>
          {lan.map((a) => (
            <li key={a.id}>{a.lang}</li>
          ))}
        </h1> */}

        <Header/>
        <SubHeader/>
        <Kiet/>
        <Mca/>
        <Aman/>
        <Content/>
        <Footer/>

      </div>
    </>
  );
}

export default App;
