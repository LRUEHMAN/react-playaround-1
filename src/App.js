import { useEffect, useState } from "react";
import "./App.css";
import { LButton } from "./LButton";

function App() {
  const [formdate, setFormdate] = useState("def");

  // at first render do this
  useEffect(() => {
    setFormdate("hi");
  }, []);

  let name = "Lutz";

  return (
    <div className="App">
      <br /> <br /> <br /> <br />
      My Bucketlist 2
      <br /> <br />
      Formvalue: {formdate}
      <br /> <br />
      N1: {name}
      <br /> <br />
      <LButton myname={name} />
    </div>
  );
}

export default App;
