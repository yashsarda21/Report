import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const { user } = useAuth();
    const isEmailYash = user.email === "yash@gmail.com";

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // const navigate = useNavigate();

    const handleReportClick = (event) => {
        event.preventDefault(); // Prevent default navigation

        // Show confirmation popup
        const confirmNavigation = window.confirm(
            "Do you want to refresh the page and view the report?"
        );
        if (confirmNavigation) {
            // Refresh the entire page
            window.location.reload();
            // After refresh, navigate to the report page
            window.location.href = "/report"; // Redirect to the report page after refresh
        }
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">MERN</NavLink>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <nav>
                        <ul className={menuOpen ? "active" : ""}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {isEmailYash ? (
                                <>
                                    <li><NavLink to="/admin">Admin</NavLink></li>
                                </>
                            ) : null}
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        {/* Attach confirmation logic to the "Report" link */}
                                        <a href="/report" onClick={handleReportClick}>
                                            Report
                                        </a>
                                    </li>
                                    <li><NavLink to="/logout">Logout</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
