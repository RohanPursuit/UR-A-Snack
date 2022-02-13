import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/snacks">
            Hello Nav Bar!
            </Link>
            <Link to="/snacks/new">
                New
            </Link>
        </div>
    );
}

export default NavBar;