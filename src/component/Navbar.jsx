import { Menu, X, Sun, Moon, CircleUserRound } from "lucide-react";

export default function Navbar({ darkTheme, setDarkTheme, showSideBar, setShowSideBar }) {
  return (
    <nav className="navbarBody" style={darkTheme ? { backgroundColor: "#fff" } : null}>
      <div className="hamburger">
        {showSideBar ? (
          <X size={32} color={!darkTheme ? "#fff" : "#333"} onClick={() => setShowSideBar(!showSideBar)} />
        ) : (
          <Menu size={32} color={!darkTheme ? "#fff" : "#333"} onClick={() => setShowSideBar(!showSideBar)} />
        )}
        <h2 className="logo" style={darkTheme ? { color: "#333" } : null}>
          Logo
        </h2>
      </div>
      <div className="navSection">
        <button onClick={() => setDarkTheme(!darkTheme)} className="theme">
          {darkTheme ? <Moon size={32} color="#333" /> : <Sun size={32} />}
        </button>
        <button className="profile">
          <CircleUserRound size={32} color={!darkTheme ? "#fff" : "#333"} />
        </button>
      </div>
    </nav>
  );
}
