import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/Common/NavBar";
import AllSnacksPage from "./Pages/AllSnacksPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        //use home as Sign in screen
        //Hide NavBar when on Sign in screen
        <Route exact path="/" element={<h2>Hello, world!</h2>}/>
        <Route path="/snacks" element={<AllSnacksPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
