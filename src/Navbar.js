import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="header">
            <div className="header-left">
                <Link to="/" className="header-title-link">Blogs</Link>
            </div>
            <div className="header-right">
                <Link className="header-right-link" to="/create">Add Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;