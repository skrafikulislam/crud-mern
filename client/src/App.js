import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Content from "./pages/Content";
// import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
