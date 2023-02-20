import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewStudentList() {
    const [state, setState] = useState([]);
    const [data, setData] = useState();
    function dataRemove(id){
    
        axios.delete(`http://localhost:3000/student/${id}`).then((response)=>{
        }).catch((error)=>
        console.log(error))
        window.location.reload()
      
      }
    useEffect(() => {
      axios.get("http://localhost:3000/student").then((response) => {
        setState(response.data);
        console.log(response.data);
      });
     
    }, []);
    useEffect(() => {
      setData(
        state.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.course}</td>
              <td>{data.class}</td>
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
              <b>View Student Here!</b>
            </center>
          </h2>
          <table border={2} align="center">
            <thead>
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Course</th>
              <th>Class</th>
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

export default ViewStudentList