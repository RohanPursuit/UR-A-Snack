import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/">
            Hello Nav Bar!
            </Link>
        </div>
    );
}

export default NavBar;