import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUserTie, } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {

    const {user, isLoading} = useAuth();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    if(!user.isAdmin){
        return <Navigate to="/"/>;
    }
    return<>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUserTie/> Users</NavLink></li>
                        <li> <NavLink to="/admin/contacts"><FaServicestack/> Contacts</NavLink></li>
                        <li> <NavLink to="/register"><FaServicestack/> Register</NavLink></li>
                        <li> <NavLink to="/"><FaHome /> Home</NavLink></li>
                    </ul>
                    
                </nav>
            </div>
        </header>
        <Outlet/>
    </>
}