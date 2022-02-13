import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/Common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<h2>Hello, world!</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
