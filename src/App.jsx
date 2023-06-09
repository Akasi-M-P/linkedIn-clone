import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
