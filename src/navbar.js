function Navbar() {
  // npm run start
  return (
    <div className="navbar">
      <h1>Planet</h1>
      <div className="nav-links">
        <a href="/"> Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  );
}

export default Navbar;
