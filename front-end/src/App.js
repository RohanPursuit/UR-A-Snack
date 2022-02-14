import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/Common/NavBar";
import AllSnacksPage from "./Pages/AllSnacksPage";
import SnackDetailPage from "./Pages/SnackDetailPage";
import NewSnackPage from "./Pages/NewSnackPage"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="sidebar"></div>
        <NavBar/>
        <Routes>
          //use home as Sign in screen
          //Hide NavBar when on Sign in screen
          <Route exact path="/" element={<h2>Hello, world!</h2>}/>
          <Route path="/snacks" element={<AllSnacksPage/>}/>
          <Route path="/snacks/:id" element={<SnackDetailPage/>}/>
          <Route path="/snacks/new" element={<NewSnackPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
