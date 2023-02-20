import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function ReturnBook() {

    const [items, setItems] = useState([]);
 
    const Navigate=useNavigate();
    
  useEffect(()=>{
        axios.get("http://localhost:3000/book").then((response) => {
          setItems(response.data);
          console.log(response.data);
        });
      },[])
    
    function returnBook(id,name,authorname,department){
      
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
      (item) => (item.name === filterText || item.id === filterText) && item.status==="Borrowed"
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
  
        {itemsToDisplay.map((item) =>{ return (item.status==="Borrowed"? (
          <div key={item.name}>
            <h3>
              {item.id}&emsp;{item.name}
            </h3>
            <p style={{ float: "right" }}>
              <button type="submit" onClick={()=>returnBook(item.id,item.name,item.authorname,item.department)}>Return Book</button>
            </p>
            <h4>{item.department}</h4>
            
            <h4>
              {item.authorname}&emsp;{item.publishername}
            </h4>
            <h4>Issued To : {item.issuedto}</h4>
            
            <hr />
          </div>
        ):(<div></div>))})}
      </div>
        
    );
}

export default ReturnBook