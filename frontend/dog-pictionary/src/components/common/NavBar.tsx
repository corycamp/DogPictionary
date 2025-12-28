const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <div
            className="flex items-center gap-3"
            role="link"
            onClick={() => {}}
          >
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary bg-amber-50">
              <span className="material-symbols-outlined text-2xl text-amber-400">
                pets
              </span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-black">
              Dog Pictionary
            </h2>
          </div>
        </a>
      </div>
      <nav className="desktopNav">
        <a href="#">How to Play</a>
        <a href="/leaderboard">Leaderboard</a>
        <a href="/login">Sign In</a>
        <button className="btn-primary">
          <a href="/signup">Sign Up</a>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
