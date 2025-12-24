const NavBar = () => {
  return (
    <header className="header">
    <div className="logo">
          🐾 <span>Dog Pictionary</span>
        </div>
        <nav className="nav">
          <a href="#">How to Play</a>
          <a href="#">Leaderboard</a>
          <a href="#">Sign In</a>
          <button className="btn primary">Sign Up</button>
        </nav>
      </header>
  );
};

export default NavBar;
