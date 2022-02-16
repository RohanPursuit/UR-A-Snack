import {Link} from "react-router-dom"
import "../../Styles/NavBar.css"

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/snacks" className="NavBar-Logo">
            <h1>UR A SNACK</h1>
            </Link>
            <div className="New-Snack-container">
                <Link to="/snacks/new" className="New-Snack-button">
                    New Snack
                </Link>
            </div>
            
        </nav>
    );
}

export default NavBar;