import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function IssueBook() {
  const [items, setItems] = useState([]);
 
  const Navigate=useNavigate();
  
useEffect(()=>{
      axios.get("http://localhost:3000/book").then((response) => {
        setItems(response.data);
        console.log(response.data);
      });
    },[])
  
  function issueBook(id,name,authorname,department){
    axios.post(`http://localhost:3000/bookentries`,{
      authorname:authorname,
      status:"",
      title:name,
      department:department,
      issuedate:"",
      returndate:"",
      issuedto:"",
      id:id

    })
    .catch((error)=>
    console.log(error))
    console.log(id);
    localStorage.setItem("bookID",id);
    localStorage.setItem("bookTitle",name);
    localStorage.setItem("bookAuthorName",authorname);
    localStorage.setItem("bookDepartment",department);
    Navigate("/IssueForm")
    window.location.reload();
    // window.location.href("/IssueForm");
  }
  const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter(
    (item) => item.name === filterText || item.id === filterText
  );

  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div style={{ padding: "20px 50px", backgroundColor: "lightgreen" }}>
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
            <button type="submit" onClick={()=>issueBook(item.id,item.name,item.authorname,item.department)}>Issue Book</button>
          </p>
          <h4>{item.department}</h4>
          
          <h4>
            {item.authorname}&emsp;{item.publishername}
          </h4>
          <hr />
        </div>
      ))}
    </div>
  );
}
