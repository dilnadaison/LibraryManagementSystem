import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import image from "./images/logo.png"
function Nav() {
  const [state, setstate] = useState({
    log: "Logout",
    user: "Hi, " + localStorage.getItem("username"),
  });
  const Navigate = useNavigate();
  //   user("Hi, " + localStorage.getItem("username"));
  // localStorage.getItem("loggedin")
  const logouts = () => {
    console.log("clicked");
    localStorage.setItem("loggedin", false);
    localStorage.setItem("username", "Welcome");
    localStorage.setItem("useremail", "");
    localStorage.setItem('userrole',"");
    state.log = localStorage.getItem("loggedin");
    Navigate("/Home");
    window.location.reload();
  };
  useEffect(() => {
    let user;
    // setstate(state => ({...state, log: user}))
    if (localStorage.getItem("loggedin") === "true") {
      state.user = { user };
      state.log = "Logout";
      //    setstate({...state});
      console.log(localStorage.getItem("loggedin"));
    } else {
      state.user = "Hi,Welcome";
      state.log = "Login";
      setstate((state) => ({ ...state }));
      //    setstate(state => ({...state, log:user}))
      //   (
      //     <Link to="Login" style={{ textDecoration: "none", color: "black" }}>

      //       <h2 style={{ color: "black" }}>Login</h2>
      //     </Link>

      //   );
    }
  }, [state]);
  //   if(state.log==='Login')
  //   {
  // <Link to="Login" style={{ textDecoration: "none", color: "black" }}></Link>
  //   }
  //   else{

  //   }
  if (localStorage.getItem("loggedin") === "true"&&localStorage.getItem("userrole")!=="Librian") {
    
    return (
      <div>
        <nav className="adminnav">
          {/* <button className="dropbtn">
            <h1
              style={{
                float: "right",
                marginBottom: -5,
                color: "white",
                fontSize: 25,
                textAlign: "center",
              }}
              onClick={logouts}
            >
              Logout
            </h1>
          </button> */}
           <img alt=" " className="logo" src={image}>
              </img>
            
          &emsp;&emsp;
          <div className="dropdown">
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                Books
              </h1>
            </button>
            <div className="dropdown-content">
              <h3 style={{ textAlign: "center" }}>
                <Link
                  to="/Books" onClick={() => window.location.href("/Books")}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Books
                </Link>
              </h3>

              <h3 style={{ textAlign: "center" }}>
                <Link
                  to="/ViewBook" onClick={() => window.location.href("/ViewBook")}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View Books
                </Link>
              </h3>

           
            </div>
          </div>
          &emsp;&emsp;
          <div className="dropdown">
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                Staff
              </h1>
            </button>
            <div className="dropdown-content">
              <h3 style={{ textAlign: "center" }}>
                <Link
                  to="/Staff" onClick={() => window.location.href("/Staff")}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add staffs
                </Link>
              </h3>

              <h3 style={{ textAlign: "center" }}>
                <Link
                  to="/ViewStaff" onClick={() => window.location.href("/ViewStaff")}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  View staffs
                </Link>
              </h3>
            </div>
          </div>
          &emsp;&emsp;
          <div className="dropdown">
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {/* Hi, Welcome */}
                {state.user}
              </h1>
            </button>
            <div className="dropdown-content">
              <h3 style={{ textAlign: "center", color: "black" }}>
                <Link
                  to="Home"
                  style={{ textDecoration: "none", color: "black" }} onClick={()=>logouts()}
                >
                  Logout
                </Link>
              </h3>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  else if(localStorage.getItem("loggedin") === "true"&&localStorage.getItem("userrole")==="Librian"){
    return (
        <div>
          <nav className="adminnav">
          <img alt=" " className="logo" src={image}>
              </img>
            {/* <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
                onClick={logouts}
              >
                Logout
              </h1>
            </button> */}
            &emsp;&emsp;
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              
              > <Link
              to="/IssueBook" onClick={() => window.location.href("/IssueBook")}
              style={{ textDecoration: "none", color: "white" }}
            >
                Issue Book
                </Link>
              </h1>
            </button>
            &emsp;&emsp;
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
                
              >
                <Link
              to="/ReturnBook" onClick={() => window.location.href("/IssueBook")}
              style={{ textDecoration: "none", color: "white" }}
            >
                Return Book
                </Link>
              </h1>
            </button>
            &emsp;&emsp;
            <div className="dropdown">
              <button className="dropbtn">
                <h1
                  style={{
                    float: "right",
                    marginBottom: -5,
                    color: "white",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  Student
                </h1>
              </button>
              <div className="dropdown-content">
                <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/StudentList" onClick={() => window.location.href("/StudentList")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Add Student
                  </Link>
                </h3>
  
                <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/ViewStudentList" onClick={() => window.location.href("/ViewStudentList")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    View Student List
                  </Link>
                </h3>
  
                {/* <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/BookTakenList" onClick={() => window.location.href("/BookTakenList")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    
                  </Link>
                </h3> */}
              </div>
            </div>
            &emsp;&emsp;
            <div className="dropdown">
              <button className="dropbtn">
                <h1
                  style={{
                    float: "right",
                    marginBottom: -5,
                    color: "white",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  Book
                </h1>
              </button>
              <div className="dropdown-content">
                <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/BookTakenList" onClick={() => window.location.href("/BookTakenList")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                     Book Taken Entries
                  </Link>
                </h3>
  
                <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/BookReturnEntries" onClick={() => window.location.href("BookReturnEntries")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Book Return Entries
                  </Link>
                </h3>
                <h3 style={{ textAlign: "center" }}>
                  <Link
                    to="/BookList" onClick={() => window.location.href("/BookList")}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                   Book List
                  </Link>
                </h3>
              </div>
            </div>
            &emsp;&emsp;
            <div className="dropdown">
              <button className="dropbtn">
                <h1
                  style={{
                    float: "right",
                    marginBottom: -5,
                    color: "white",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  {/* Hi, Welcome */}
                  {state.user}
                </h1>
              </button>
              <div className="dropdown-content">
                <h3 style={{ textAlign: "center", color: "black" }}>
                  <Link
                    to="Home"
                    style={{ textDecoration: "none", color: "black" }} onClick={()=>logouts()}
                  >
                    Logout
                  </Link>
                </h3>
              </div>
            </div>
          </nav>
        </div>
      );
  }
  
  else {
    return (
      <div>
        <nav className="adminnav">
        <img alt=" " className="logo" src={image}>
              </img>
          {/* <button className="dropbtn">
            <h1
              style={{
                float: "right",
                marginBottom: -5,
                color: "white",
                fontSize: 25,
                textAlign: "center",
              }}
              onClick={logouts}
            >
              Logout
            </h1>
          </button> */}
          &emsp;&emsp;
          <div className="dropdown">
            <button className="dropbtn">
              <h1
                style={{
                  float: "right",
                  marginBottom: -5,
                  color: "white",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {/* Hi, Welcome */}
                {state.user}
              </h1>
            </button>
            <div className="dropdown-content">
              <h3 style={{ textAlign: "center", color: "black" }}>
                <Link
                  to="Login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {state.log}
                </Link>
              </h3>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
