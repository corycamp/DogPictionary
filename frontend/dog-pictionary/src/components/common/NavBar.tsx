const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary bg-amber-50">
            <span className="material-symbols-outlined text-2xl text-amber-400">
              pets
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-black">
            Dog Pictionary
          </h2>
        </div>
      </div>
      <nav className="desktopNav">
        <a href="#">How to Play</a>
        <a href="#">Leaderboard</a>
        <a href="#">Sign In</a>
        <button className="btn-primary">Sign Up</button>
      </nav>
    </header>
  );
};

export default NavBar;
