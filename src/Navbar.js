const Navbar = () => {
    return (
        <nav className="header">
            <div className="header-left">
                <a href="/" className="header-title" style={{
                    textDecoration: 'none',
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: '.3mm',
                    color: '#ced4da'
                }}>Blogs</a>
            </div>
            <div className="header-right">
                <a className="header-right-link" href="/">Home</a>
                <a className="header-right-link" href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;