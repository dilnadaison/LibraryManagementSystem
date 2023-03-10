import axios from "axios";
import React, { useEffect, useState } from "react";
 import { useNavigate } from "react-router";

function ReturnBook() {
  const [items, setItems] = useState([]);

const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/bookentries").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  const [date, setDate] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDate((values) => ({ ...values, [name]: value }));
    localStorage.setItem("returnedDate", value);
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

  const filteredItems = items.filter(
    (item) =>
      (item.title === filterText || item.bookId === filterText) &&
      item.status === "Borrowed"
  );
  function gotoHome(){
    alert("Successfully Returned Book!!!")
    Navigate("/Home")
    window.location.reload();
  }
  function returnBook(entryID, bookId) {
    const date = localStorage.getItem("returnedDate");
    axios
      .patch(`http://localhost:3000/bookentries/${entryID}`, {
        status: "Returned",
        returndate: date,
      })
      .catch((error) => console.log(error));
    axios
      .patch(`http://localhost:3000/book/${bookId}`, {
        status: "Returned",
        returndate: date,
      })
      .catch((error) => console.log(error));
      gotoHome();
  
  }
  const itemsToDisplay = filterText ? filteredItems : items;

  return (
    <div className="form" key={1}>
      <h1>Return Book Here!</h1>
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

      {itemsToDisplay.map((item) => {
        return item.status === "Borrowed" ? (
          <div key={item.title.toString()}>
            <h3>
              {item.bookId}&emsp;{item.title}
            </h3>
            <p style={{ float: "right" }}>
              <button
                className="return"
                type="submit"
                onClick={() => returnBook(item.id, item.bookId)}
              >
                Return Book
              </button>
            </p>

            <h4>
              {item.authorname}&emsp;{item.department}
            </h4>
            <h4>Issued To : {item.issuedto}</h4>
            <h4>Issued Date : {item.issuedate}</h4>
            <h4>
              Return Date :{" "}
              <input
                type="date"
                name="returndate"
                onChange={handleChange}
              ></input>
            </h4>
            <hr />
          </div>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
}


export default ReturnBook;
