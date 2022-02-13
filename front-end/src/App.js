import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Hello Nav Bar!</h1>
      <Routes>
        <Route exact path="/" element={<h2>Hello, world!</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
