export default function SidebarLinks({ showSideBar, darkTheme }) {
  const links = ["Home", "Products", "Services", "Clients", "About us", "Contact us", "Faq"];

  return (
    <aside
      className="navWrapper sidebarContentWrapper"
      id={showSideBar ? "show" : ""}
      style={darkTheme ? { backgroundColor: "#fff" } : null}
    >
      {links.map((link) => (
        <div key={link} className="anchorWrapper">
          <a href="/">{link}</a>
        </div>
      ))}
    </aside>
  );
}
