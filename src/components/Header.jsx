import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="wrapper">
            <h1>Movie.js</h1>
            <nav className="header-nav">
                <Link to="/movies">Lista film</Link>
                <Link to="/">Homepage</Link>
            </nav>
        </header>
    );
}

export default Header;
