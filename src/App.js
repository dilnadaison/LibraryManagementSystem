import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./nav";
import "./style.css";

import Login from "./login";
import Home from "./home";
import Books from "./book";
import Staff from "./staff";
import ViewStaff from "./ViewStaff";
import ViewBook from "./ViewBook";
import BookTakenList from "./bookTakenList";
import StudentList from "./studentList";
import ViewStudentList from "./ViewStudentList";
import IssueBook from "./issueBook";
import IssueForm from "./issueForm";
import ReturnBook from "./returnBook";
import BookReturnEntries from "./bookReturnList";
import BookList from "./bookList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <div style={{padding:299,backgroundSize:'cover',backgroundImage:`url('https://whataftercollege.com/wp-content/uploads/2019/03/2-1-1024x535.jpg')`}}>
       
          <Routes>
          <Route exact path="/Home" element={<Home/>} ></Route>
          <Route path="/Login/*" element={<Login/>}> </Route>
          <Route path="/Books" element={<Books/>}> </Route>
          <Route path="/Staff" element={<Staff/>}> </Route>
          <Route path="/ViewStaff" element={<ViewStaff/>}> </Route>
          <Route path="/ViewBook" element={<ViewBook/>}> </Route>
          <Route path="/BookTakenList" element={<BookTakenList/>}> </Route>
          <Route path="/StudentList" element={<StudentList/>}> </Route>
          <Route path="/ViewStudentList" element={<ViewStudentList/>}> </Route>
          <Route path="/IssueBook" element={<IssueBook/>}> </Route>
          <Route path="/IssueForm" element={<IssueForm/>}> </Route>
          <Route path="/ReturnBook" element={<ReturnBook/>}> </Route>
          <Route path="/BookTakenList" element={<BookTakenList/>}> </Route>
           <Route path="/BookReturnEntries" element={<BookReturnEntries/>}> </Route> 
           <Route path="/BookList" element={<BookList/>}> </Route>
          </Routes>
      
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
