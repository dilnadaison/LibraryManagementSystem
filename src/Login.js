import React, { useState,useEffect } from "react";
import {  useNavigate,Link } from "react-router-dom";
//import Homes from "./homes";
import axios from "axios"

//import ReactDOM from "react-dom";

import "./style.css";




function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[user,setuser]=useState([]);
const Navigate=useNavigate();


localStorage.setItem('loggedin', false);
  //const Navigate=useNavigate();
  // User Login info
  // const database = [
  //   {
  //     email: "user@gmail.com",
  //     password: "pass1",
  //   },
  //   {
  //     email: "user2",
  //     password: "pass2",
  //   },
  // ];

  const errors = {
    email: "invalid email",
    password: "invalid password",
  };


    // const [employeeslist, setemployees] = useState(null)
    // useEffect(() => {
    //     getemployees()
    // }, [])
    // const getemployees = () => {
    //         axios.get('http://restapi.adequateshop.com/api/Metadata/GetEmployees').then(response => response.data).then(
    //             (result) => {
    //                 setemployees(result)
    //             },
    //             (error) => {
    //                 setemployees(null);
    //             }
    //           )
    // }
    useEffect(()=>{
    
            axios.get('http://localhost:3000/user').then(response => response.data).then(
                (result) => {
                 
                    setuser(result);
                    
                },
                (error) => {
                    setuser(null);
                }
              )
    
              
              
              },[])
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

   
    var { email, password } = document.forms[0];

    // Find user login info
    const userData = user.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
        
      } else {
        setIsSubmitted(true);
        alert("User is successfully logged in");
        Navigate("/Home");
         window.location.reload();
        //<Navigate to="/Homes" refresh="true"/>
        localStorage.setItem('loggedin', true);
        localStorage.setItem('username', userData.name);
        localStorage.setItem('useremail',userData.email);
        localStorage.setItem('userrole',userData.role);
        console.log(userData.email);
        console.log(userData.name);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email })
      localStorage.setItem('loggedin', false);
                localStorage.setItem('user', "");
     
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="logininput">
          <label className="labelname">Email </label>
          <input style={{fontSize:15}} type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="logininput">
          <label className="labelname">Password </label>
          <input style={{fontSize:15}} type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        
        <div className="button-container">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  );

  return (
    <div >
      <div className="login">
        <div className="title"><center>Sign In</center></div>
        {isSubmitted ? '': renderForm }
       
      </div>
  
    </div>
  );
}

export default Login;
