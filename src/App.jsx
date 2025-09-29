import { useEffect, useState } from "react";
import {
  Menu,
  HomeIcon,
  ShoppingCartIcon,
  LaptopMinimalCheck,
  CircleStar,
  Headset,
  UserStar,
  MessageCircleQuestionMark,
  X,
  CircleUserRound,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";
import Story from "./component/Story";
import Gallery from "./component/Gallery";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="appBody" style={darkTheme ? { backgroundColor: "#fff", color:"#333"} : null}>
      <nav className="navbarBody" style={darkTheme ? { backgroundColor: "#fff" } : null}>
        <div className="hamburger">
          {showSideBar ? (
            <X size={32} color={!darkTheme ? "#fff" : "#333"} onClick={() => setShowSideBar(!showSideBar)} />
          ) : (
            <Menu size={32} color={!darkTheme ? "#fff" : "#333"} onClick={() => setShowSideBar(!showSideBar)} />
          )}
          <h2 className="logo" style={darkTheme ? { color: "#333"} : null}>
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

      <aside className="iconWrapper sidebarContentWrapper" style={darkTheme ? { backgroundColor: "#fff" } : null}>
        <span className="iconWithLabel">
          <HomeIcon aria-label="Home" />
          <span className="label">Home</span>
        </span>
        <span className="iconWithLabel">
          <ShoppingCartIcon aria-label="Products" />
          <span className="label">Products</span>
        </span>
        <span className="iconWithLabel">
          <LaptopMinimalCheck aria-label="Services" />
          <span className="label">Services</span>
        </span>
        <span className="iconWithLabel">
          <CircleStar aria-label="Clients" />
          <span className="label">Clients</span>
        </span>
        <span className="iconWithLabel">
          <UserStar aria-label="About us" />
          <span className="label">About us</span>
        </span>
        <span className="iconWithLabel">
          <Headset aria-label="Contact us" />
          <span className="label">Contact us</span>
        </span>
        <span className="iconWithLabel">
          <MessageCircleQuestionMark aria-label="FAQs" />
          <span className="label">FAQs</span>
        </span>
      </aside>

      <aside
        className="navWrapper sidebarContentWrapper"
        id={showSideBar ? "show" : ""}
        style={darkTheme ? { backgroundColor: "#fff" } : null}
      >
        <div className="anchorWrapper">
          <a href="/">Home</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">Products</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">Services</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">Clients</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">About us</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">Contact us</a>
        </div>
        <div className="anchorWrapper">
          <a href="/">Faq</a>
        </div>
      </aside>
      <main>
        <Story/>
        <Gallery/>
      </main>
    </div>
  );
}

export default App;
