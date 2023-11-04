import "./App.css";
import Header from "./components/Header";
import Shoe from "./components/Shoe";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="main__container">
      <Header modal={modal} setModal={setModal}/>
      <Shoe modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
