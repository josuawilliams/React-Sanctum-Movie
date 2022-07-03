import { NavLink, Link } from "react-router-dom"
import logo from "../logo.png"

export default function Navbar(){
    let activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    let offstyle = {
        color : "white"
    }
    return (
        <>
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img id="logo" src={logo} /> <span style={{color: "white"}}>Sanctum Movie</span>
                </Link>
                <div className="collapse navbar-collapse mb-1" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id="nav3" className="nav-item">
                            <NavLink to={"/"}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : offstyle
                                }
                                className="nav-link" aria-current="page">Home</NavLink>
                        </li>

                        <li id="nav1" className="nav-item">
                            <NavLink to={"/about"} style={({ isActive }) =>
                                isActive ? activeStyle : offstyle
                            } className="nav-link" href="">About Me</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}