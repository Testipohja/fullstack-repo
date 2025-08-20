import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import UserList from "./pages/UserList"
import UserProfile from "./pages/UserProfile"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/userlist" element={<UserList/>}/>
          <Route path="/user/:name" element={<UserProfile/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer/>
    </>
  )
}

export default App
