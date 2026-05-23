import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateShipment from "./pages/CreateShipment";
import TrackShipment from "./pages/TrackShipment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateShipment />} />
        <Route path="/track" element={<TrackShipment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
