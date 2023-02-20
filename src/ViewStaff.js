import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
export default function ViewStaff() {
  const [state, setState] = useState([]);
  const [data, setData] = useState();
  function dataRemove(id){
  
      axios.delete(`http://localhost:3000/user/${id}`).then((response)=>{
      }).catch((error)=>
      console.log(error))
      window.location.reload()
    
    }
  useEffect(() => {
    axios.get("http://localhost:3000/user").then((response) => {
      setState(response.data);
      console.log(response.data);
    });
   
  }, []);
  useEffect(() => {
    setData(
      state.map((data) => {
        return (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            <td><i class="fa-solid fa-trash" onClick={() =>dataRemove(data.id)}></i></td>
          </tr>
        );
      })
    );
  }, [state]);
 
  return (
    
    <div>
      <div className="reg-form">
        <h2>
          <center>
            <b>View Staff Here!</b>
          </center>
        </h2>
        <table border={2} align="center">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
          </thead>

          <tbody>
        
            {data}
          </tbody>
        </table>
      </div>
    </div>
  );
}
