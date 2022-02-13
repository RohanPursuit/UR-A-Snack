import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/snacks">
            Hello Nav Bar!
            </Link>
            <Link to="/snack/new">
                New
            </Link>
        </div>
    );
}

export default NavBar;