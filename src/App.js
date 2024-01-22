import "./App.css";
import Homepage from "./pages/Homepage";
import CarSearch from "./pages/CarSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Car from "./pages/Car";
import Notfound from "./pages/NotFound";
import Cars from "./pages/Cars";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<CarSearch />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-detail/:id" element={<Car />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
