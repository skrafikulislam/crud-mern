import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const serverUrl = "http://localhost:5000";

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${serverUrl}/update/` + id)
      .then((res) => {
        let userData = res.data;
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${serverUrl}/updateUser/` + id, { name, email, age })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    setName("");
    setEmail("");
    setAge("");
    navigate("/");
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <form action="">
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>

          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
