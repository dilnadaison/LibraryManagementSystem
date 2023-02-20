import axios from "axios";
import React, { useEffect, useState } from "react";

function IssueForm() {
  const [items, setItems] = useState([]);
  const [date, setDate]=useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDate((values) => ({ ...values, [name]: value }));
    localStorage.setItem("issuedDate",value)
  };
    
    
 
  
  const id = localStorage.getItem("bookID");
  const title = localStorage.getItem("bookTitle");
  const authorName = localStorage.getItem("bookAuthorName");
  const department = localStorage.getItem("bookDepartment");

  const [filterText, setFilterText] = useState("");

useEffect(()=>{
  axios.get("http://localhost:3000/student").then((response) => {
        setItems(response.data);
        console.log(response.data);
  });
    },[])
  const filteredItems = items.filter(
    (item) => item.name === filterText || item.id === filterText
  );
  
  const itemsToDisplay = filterText ? filteredItems : items;
  
  return (
    <div style={{ padding: "20px 50px", backgroundColor: "lightgreen" }}>
      <div style={{ float: "right" }}>
        <h4>
          {id}-{title}
        </h4>
        <h4>
          {authorName}&emsp;{department}
        </h4>
      </div>
      <h1>Search Page</h1>

      <input
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}

      {itemsToDisplay.map((item) => (
        <div key={item.name}>
          <h3>
            {item.id}&emsp;{item.name}
          </h3>
          <p style={{ float: "right" }}>
            <button onClick={issueBook(item.name,id)}>Confirm</button>
          </p>
          <h4>{item.department}</h4>

          <h4>
            {item.course}&emsp;{item.class}
          </h4>
          <h4>Issue date : <input type="date" name="issueddate" onChange={handleChange}></input></h4>
          <hr />
        </div>
      ))}
    </div>
  );
}
function issueBook(name,bookID) {
  const date = localStorage.getItem("issuedDate");
  axios.patch(`http://localhost:3000/bookentries/${bookID}`,{
      status:"Borrowed",
      issuedto:name,
      issuedate:date
    })
    .catch((error)=>
    console.log(error))
};
export default IssueForm;
