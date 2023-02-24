import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Navigate } from 'react-router-dom';
export default function IssueBook() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/book").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  function issueBook(id, name, authorname, department) {
    // axios.post(`http://localhost:3000/bookentries`,{
    //   authorname:authorname,
    //   status:"",
    //   title:name,
    //   department:department,
    //   issuedate:"",
    //   returndate:"",
    //   issuedto:"",
    //   bookId:id

    // })
    // .then((response)=>{response.send(response.insertID)
    //   console.log(response.insertID)
    // }
    // )
    // .then( data.map((data)=>{
    //   console.log(data.id)
    // const id=data.id;
    // }))
    // localStorage.setItem("id",id);
    // Navigate("/IssueForm");
    // }))
    // .then(window.location.reload())
    // .catch((error)=>
    // console.log(error))
    // console.log(id);

    // const entryID=localStorage.getItem("id");
    // localStorage.setItem("entryID",entryID);
    localStorage.setItem("bookID", id);
    localStorage.setItem("bookTitle", name);
    localStorage.setItem("bookAuthorName", authorname);
    localStorage.setItem("bookDepartment", department);
    Navigate("/IssueForm");
    // return(
    //     <Navigate to="/issueForm"/>
    // );
    // data.map((data)=>{
    //   console.log(data.id)
    // const id=data.id;

    // localStorage.setItem("entryID",id);
    // }
    // )
    // Navigate("/IssueForm",{state:{id:entryID}})
    window.location.reload(true);
    // <Navigate to="/IssueForm"></Navigate>
    // window.location.href("/IssueForm");
  }
  const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter(
    (item) => item.name === filterText || item.id === filterText
  );

  const itemsToDisplay = filterText ? filteredItems : items;
  data.map((data) => {
    console.log(data.id);
    const entryid = data.id;

    localStorage.setItem("id", entryid);
  });
  return (
    <div className="form" >
      <h1>Issue Book Here!</h1>
      <input className="filter"
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <hr />
      {!filteredItems.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}

      {itemsToDisplay.map((item) =>{ return item.status!=="Borrowed"?(
        <div key={item.name}>
          <h3>
            {item.id}&emsp;{item.name}
          </h3>
          <p style={{ float: "right" }}>
            <button className="issue"
              type="submit"
              onClick={() =>
                issueBook(item.id, item.name, item.authorname, item.department)
              }
            >
              Issue Book
            </button>
          </p>
          <h4>{item.department}</h4>

          <h4>
            {item.authorname}&emsp;{item.publishername}
          </h4>
          <hr />
        </div>
      ):""})}
    </div>
  );
}
