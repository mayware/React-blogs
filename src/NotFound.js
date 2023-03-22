import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="content">
            <h1>404 Not Found</h1>
            <Link to="/" className="home-page-link">Home page</Link>
        </div>
    );
}

export default NotFound;