import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
export default function ViewStaff() {
  const [state, setState] = useState([]);
  const [data, setData] = useState();
  function dataRemove(id){
    if(window.confirm("Are you sure want to delete ?")){
      axios.delete(`http://localhost:3000/user/${id}`).then((response)=>{
      }).catch((error)=>
      console.log(error))
      window.location.reload()
    }
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
        return data.role==="Librian"?(
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            <td>{data.phone}</td>
            <td><i class="fa-solid fa-circle-xmark" onClick={() =>dataRemove(data.id)} style={{color:"red",fontSize:20}}></i></td>
          </tr>
        ):"";
      })
    );
  }, [state]);
 
  return (
    
    <div>
      <div className="table">
        <h2>
          <center>
            <b>View Staff Here!</b>
          </center>
        </h2><br></br>
        <table className="viewtable" border={2} align="center">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile No.</th>
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
