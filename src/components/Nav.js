import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link to="/" class ="navbar-brand mx-3">logo</Link>
            <div class="nav">
                <Link to="/register" class="nav-link">Register</Link>
                <Link to="/Login" class="nav-link">Sign-in</Link>
            </div>

        </nav>
    )
}

export default Nav;