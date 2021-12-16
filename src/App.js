import "./App.css";
import Routes from "./Routes";
import Nav from "./Nav";
import dogs from "./Dogs";
import { useState } from "react";

function App() {
  const initialState = ["blue", "red", "green"];
  const [colors, setColors] = useState(initialState);

  return (
    <div className='App'>
      <Nav />
      <Routes dogs={dogs} colors={colors} setColors={setColors} />
    </div>
  );
}

export default App;
