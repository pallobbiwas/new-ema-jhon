import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Required from "./components/Required/Required";
import Shiping from "./components/Shiping/Shiping";
import Shope from "./components/Shope/Shope";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="bg-color">
      <Header />
      <Routes>
        <Route path="/" element={<Shope />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route
          path="/inventory"
          element={
            <Required>
              <Inventory />
            </Required>
          }
        ></Route>
        <Route
          path="/shiping"
          element={
            <Required>
              <Shiping />
            </Required>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
