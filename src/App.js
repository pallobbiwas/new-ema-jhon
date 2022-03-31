import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import Shope from "./components/Shope/Shope";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shope />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
