import {Link} from "react-router-dom"
import "../../Styles/NavBar.css"

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/snacks" className="NavBar-Logo">
            UR A SNACK
            </Link>
            <div className="New-Snack-container">
                <Link to="/snacks/new" className="New-Snack-button">
                    New Snack
                </Link>
            </div>
            
        </div>
    );
}

export default NavBar;