import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home} from "./pages/Home";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import  Login  from "./pages/Login";
import Navbar from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import { Logout } from "./pages/Logout";
import Report from "./pages/Report";
import { AdminLayout } from "./components/layouts/Admin-layout";
import { AdminUsers } from "./pages/Admin-users";
import { AdminContacts } from "./pages/Admin-Contacts";


const App = () =>{
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"  element = {<Home/>}/>
        <Route path="/about"  element = {<About/>}/>
        <Route path="/contact"  element = {<Contact/>}/>
        <Route path="/register"  element = {<Register/>}/>
        <Route path="/login"  element = {<Login/>}/>
        <Route path="/logout"  element = {<Logout/>}/>
        <Route path="/report"  element = {<Report/>}/>
        <Route path="*"  element = {<Error/>}/>
        <Route path="/admin" element= {<AdminLayout/>}>
            <Route path="users" element = {<AdminUsers/>}/>
            <Route path="contacts" element = {<AdminContacts/>}/>
        </Route>
      </Routes>  
      <Footer/>
    </BrowserRouter>
  </>;
};

export default App;