import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Route, Routes } from "react-router-dom";

import { AddBook } from "./pages/books/AddBook";
import { AdminList } from "./pages/user/AdminList";
import { AllBurrow } from "./pages/burrow/AllBurrow";
import { BookList } from "./pages/books/BookList";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EditBook } from "./pages/books/EditBook";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login-signup/Login";
import { MyBurrow } from "./pages/burrow/MyBurrow";
import { Signup } from "./pages/login-signup/Signup";
import { StudentsList } from "./pages/user/StudentsList";
import { ToastContainer } from "react-toastify";
import { UserProfile } from "./pages/user/UserProfile";

function App() {
  return (
    <>
      <Routes>
        {/* public path */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private path */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* book path */}
        <Route path="/admin/books" element={<BookList />} />
        <Route path="/admin/books/add" element={<AddBook />} />
        <Route path="/admin/books/edit/:_id" element={<EditBook />} />

        {/* burrow path */}
        <Route path="/admin/all-burrows" element={<AllBurrow />} />

        {/* user */}
        <Route path="/admin/students" element={<StudentsList />} />
        <Route path="/admin/admins" element={<AdminList />} />

        {/* both admin and students  */}
        <Route path="/my-books" element={<MyBurrow />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
