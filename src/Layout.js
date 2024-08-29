import { Link, MemoryRouter, Route } from "react-router-dom"
import { Routes } from "./Routes"


const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to="/MainLogin">MainLogin</Link></li>
                <li><Link to="/TimePass">TimePass</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>

        </div>
    )
}

export default Layout