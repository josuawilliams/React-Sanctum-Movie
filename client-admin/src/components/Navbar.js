import logo from "../logo.png"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Navbar() {
    const navigate = useNavigate()
    function handleLogOut(e) {
        e.preventDefault()
        localStorage.clear()
        navigate("/login")
    }

    let activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "yellow"
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" href="">
                    <img id="logo" src={logo} /> Sanctum Movie Admin
                </Link>
                <div className="collapse navbar-collapse mb-1" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id="nav3" className="nav-item">
                            <NavLink to={"/"}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                className="nav-link" aria-current="page">Home</NavLink>
                        </li>

                        <li id="nav1" className="nav-item">
                            <NavLink to={"register"} style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-link" href="">Register</NavLink>
                        </li>

                        <li id="nav2" className="nav-item">
                            <NavLink to={"add-movie"} style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-link" href="">Add Movie</NavLink>
                        </li>

                    </ul>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li id="logout" className="nav-item ">
                        <a onClick={handleLogOut} className="nav-link" href="">LogOut</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}