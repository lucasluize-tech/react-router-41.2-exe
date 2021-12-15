import "./App.css";
import Routes from "./Routes";
import Nav from "./Nav";
import dogs from "./Dogs";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes dogs={dogs} />
    </div>
  );
}

export default App;
