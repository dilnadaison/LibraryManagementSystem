import axios from "axios";
import React, { useEffect, useState } from "react";

function BookList() {
  const [items, setItems] = useState([]);

  //   const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/book").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  //   const [date, setDate] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;

    localStorage.setItem("filterData", value);
    window.location.reload()
  };

  //   function returnBook(id, name, authorname, department) {
  //     console.log(id);
  //     localStorage.setItem("bookID", id);
  //     localStorage.setItem("bookTitle", name);
  //     localStorage.setItem("bookAuthorName", authorname);
  //     localStorage.setItem("bookDepartment", department);
  //     Navigate("/IssueForm");
  //     window.location.reload();
  //     // window.location.href("/IssueForm");
  //   }
  const [filterText, setFilterText] = useState("");
  const data=localStorage.getItem("filterData");
  console.log(data);
  const filteredItems = items.filter(
    (item) =>
      (item.title === filterText || item.id === filterText ||
      item.department ===filterText) 
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
      {/* <select name="dept" onChange={handleChange} value={data}>
        <option value="select" >Select</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Computer Application">Computer Application</option>
      </select> */}
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}

      {itemsToDisplay.map((item) =>{ return(
        <div key={item.id}>
          {/* <p style={{float:"right"}}> <h4>Department {item.department}</h4>
                <h4>
                  {item.authorname}
                </h4></p> */}
          <h3>
            {item.id}&emsp;{item.name}
          </h3>

          <h4>
            {item.authorname}&emsp;{item.department}
          </h4>
          {/* <h4>Issued To : {item.issuedto}</h4> */}

          <hr />
        </div>
     
    )})}
    </div>
  );
}
export default BookList;
