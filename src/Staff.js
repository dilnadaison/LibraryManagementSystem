import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Staff() {
  const Navigate = useNavigate();
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // // const gotoHome=(event)=>{
  //  event.preventDefault();
  //   alert("Product will be delivered to you");
  //   Navigate("/Homes");
  // }
  const [value, setValue] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValue((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(value);
  //      alert("Product will be delivered to you");
  //   Navigate("/Homes");
  // }
  function gotoLogin() {
    if (localStorage.getItem("loggedin") === "true") {
      setValue(true);
      alreadyPesent();
      alert("Successfully Registered!!!");
      Navigate("/Home");
      //setID(Object.keys(data).length + 1)
      console.log("logged in");
    } else {
      //<Navigate to="/LoginForm"/>
      Navigate("/Home");
    }
  }

  const alreadyPesent = async () => {
    await axios
      .post("http://localhost:3000/user", value)
      .then((response) => {
        console.log("data inserted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app">
      <div className="reg-form">
        <h2>
          <center>
            <b>Register Here!</b>
          </center>
        </h2>
        <form className="form" onSubmit={gotoLogin}>
          <div className="input-container">
            <label className="labelname">
              <strong>Name</strong>
            </label>
            <input
              style={{ fontSize: 15 }}
              required
              type="text"
              name="name"
              pattern="[A-Za-z\s]{2,32}"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label className="labelname">
              <strong>Email</strong>
            </label>
            <input
              style={{ fontSize: 15 }}
              required
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label className="labelname">
              <strong>Password</strong>
            </label>
            <input
              style={{ fontSize: 15 }}
              required
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          {/* <div className="input-container">
            <label className="labelname">
              <strong>DOB</strong>
            </label>
            <input
              required
              type="date"
              name="dob"
              className={
                error.dob.length > 0
                  ? "is-invalid form-control"
                  : "form-control"
              }
              onChange={this.formObject}
            />

            {error.dob.length > 0 && (
              <span className="invalid-feedback">{error.dob}</span>
            )}
          </div> */}

          <div className="input-container">
            <label className="labelname">
              <strong>Address</strong>
            </label>
            <input
              style={{ fontSize: 15 }}
              required
              type="text"
              name="address"
              onChange={handleChange}
            />
          </div>
          
          <div className="input-container">
            <label className="labelname">
              <strong>user role</strong>
            </label>
            <input
              style={{ fontSize: 15 }}
              required
              type="text"
              name="role"
              value='Librian' 
              onMouseOver={handleChange} disabled
            />
          </div>
          {/* <div className="input-container">
            <label className="labelname">
              <strong>user role</strong>
            </label>
            <select name="role" onChange={handleChange}>
                <option value="Librian">Librian</option>
                <option value="Admin">Admin</option>
            </select>
           
          </div> */}

          <div className="button-container">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
