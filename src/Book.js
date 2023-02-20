import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";


export default function Books() {
  const Navigate=useNavigate();
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
    setValue(values => ({...values, [name]: value}))
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(value);
  //      alert("Product will be delivered to you");
  //   Navigate("/Homes");
  // }
  function gotoHomes() {
    if (localStorage.getItem("loggedin") === "true") {
      setValue(true);
      alreadyPesent();
      alert("Successfully Book Added!!!")
      Navigate("/Home");
      //setID(Object.keys(data).length + 1)
      console.log("logged in");
    } else {
     
        alert("Successfully Book Added!!!")
      //<Navigate to="/LoginForm"/>
      Navigate("/Home");
    }
  }

  const alreadyPesent = async () => {
    await axios.post("http://localhost:3000/book",value)
    .then((response) => {
      console.log("data inserted successfully");
      window.location.reload();
      
    })
    .catch((error) => {
      console.log(error);
    });
    
}
return (
    <div className="app">
      <div className="reg-form">
        <h2><center><b>Add Book Here!</b></center></h2>
        <form className="form" onSubmit={gotoHomes}>
          <div className="input-container">
            <label className="labelname">
              <strong>Book Name</strong>
            </label>
            <input style={{fontSize:15}}
              required
              type="text"
              name="name"
              onChange={handleChange}
              
            />

            
          </div>

          <div className="input-container">
            <label className="labelname">
              <strong>Department</strong>
            </label>
            <input style={{fontSize:15}}
              required
              type="text"
              name="department"
              
              onChange={handleChange}
            />

       
          </div>

          <div className="input-container">
            <label className="labelname">
              <strong>Author Name</strong>
            </label>
            <input style={{fontSize:15}}
              required
              type="text"
              name="authorname"
          
              onChange={handleChange}
            />

          
          </div>

          <div className="input-container">
            <label className="labelname">
              <strong>Publisher Name</strong>
            </label>
            <input style={{fontSize:15}}
              required
              type="text"
              name="publishername"
          
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

          <div className="button-container">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

