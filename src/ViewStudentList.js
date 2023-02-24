import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewStudentList() {
    const [state, setState] = useState([]);
    const [data, setData] = useState();
    function dataRemove(id){
      if(window.confirm("Are you sure want to delete ?")){
        axios.delete(`http://localhost:3000/student/${id}`).then((response)=>{
        }).catch((error)=>
        console.log(error))
        window.location.reload()
      }
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
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.course}</td>
              <td>{data.class}</td>
              <td><i className="fa-solid fa-circle-xmark" onClick={() =>dataRemove(data.id)} style={{color:"red",fontSize:20}}></i></td>
            </tr>
          );
        })
      );
    }, [state]);
   
    return (
      
      
        <div className="table">
          <h2>
            <center>
              <b>View Student Here!</b>
            </center>
          </h2><br></br>
          <table className="viewtable" border={2} align="center" >
            <thead >
              <tr >
              <th >ID</th>
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
     
    );
}

export default ViewStudentList