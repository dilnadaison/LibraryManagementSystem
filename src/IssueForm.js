import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router";

function IssueForm() {
  const [items, setItems] = useState([]);
  const [date, setDate] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDate((values) => ({ ...values, [name]: value }));
    localStorage.setItem("issuedDate", value);
  };
const Navigate=useNavigate();
  const id = localStorage.getItem("bookID");
  const title = localStorage.getItem("bookTitle");
  const authorName = localStorage.getItem("bookAuthorName");
  const department = localStorage.getItem("bookDepartment");
  const entryID = localStorage.getItem("id");
  console.log(entryID);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/student").then((response) => {
      setItems(response.data);
      console.log(response.data);
      // window.location.reload();
    });
  }, []);
  const filteredItems = items.filter(
    (item) => item.name === filterText || item.id === filterText
  );

  const itemsToDisplay = filterText ? filteredItems : items;

  function issueBook(name, bookID, title, department, authorname) {
    const date = localStorage.getItem("issuedDate");

    // axios.patch(`http://localhost:3000/bookentries/${entryID}`,{
    //     status:"Borrowed",
    //     issuedto:name,
    //     issuedate:date
    //   })
    //   .catch((error)=>
    //   console.log(error))

    axios.post(`http://localhost:3000/bookentries`, {
      authorname: authorname,
      title: title,
      department: department,
      issuedate: date,
      returndate: "",
      status:"Borrowed",
      issuedto: name,
      bookId: bookID,
    })
    axios.patch(`http://localhost:3000/book/${bookID}`, {
      status: "Borrowed",
    });
   
  gotoHome();
     
  }
function gotoHome(){
  alert("Successfully Issued Book!!!")
  Navigate("/Home")
  window.location.reload();
}
  return (
    <div className="form">
      <div style={{ float: "right" }}>
        <h4>
          {id}-{title}
        </h4>
        <h4>
          {authorName}&emsp;{department}
        </h4>
      </div>
      <h1>Issue Book Here!</h1>

      <input
        className="filter"
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
            <button
              className="issue"
              onClick={() =>
                issueBook(item.name, id, title, department, authorName)
              }
            >
              Confirm
            </button>
          </p>
          <h4>{item.department}</h4>

          <h4>
            {item.course}&emsp;{item.class}
          </h4>
          <h4>
            Issue date :{" "}
            <input
              type="date"
              name="issueddate"
              onChange={handleChange}
            ></input>
          </h4>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default IssueForm;
