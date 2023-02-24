import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
export default function ViewBook() {
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
    axios.get("http://localhost:3000/book").then((response) => {
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
            <td>{data.department}</td>
            <td>{data.authorname}</td>
            <td>{data.publishername}</td>
            <td><i class="fa-solid fa-circle-xmark" onClick={() =>dataRemove(data.id)} style={{color:"red",fontSize:20}}></i></td>
          </tr>
        );
      })
    );
  }, [state]);

  return (
    <div>
      <div className="table">
        <h2>
          <center>
            <b>View Book Here!</b>
          </center>
        </h2>
        <table className="viewtable" border={2} align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Author Name</th>
              <th>Publisher Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );
}
