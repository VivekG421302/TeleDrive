import { 
  HomeIcon, 
  ShoppingCartIcon, 
  LaptopMinimalCheck, 
  CircleStar, 
  Headset, 
  UserStar, 
  MessageCircleQuestionMark 
} from "lucide-react";

export default function SidebarIcons({ darkTheme, id }) {
  const icons = [
    { icon: HomeIcon, label: "Home" },
    { icon: ShoppingCartIcon, label: "Products" },
    { icon: LaptopMinimalCheck, label: "Services" },
    { icon: CircleStar, label: "Clients" },
    { icon: UserStar, label: "About us" },
    { icon: Headset, label: "Contact us" },
    { icon: MessageCircleQuestionMark, label: "FAQs" },
  ];

  return (
    <aside
      id={id}
      className="iconWrapper sidebarContentWrapper"
      style={darkTheme ? { backgroundColor: "#fff" } : null}
    >
      {icons.map(({ icon: Icon, label }) => (
        <span key={label} className="iconWithLabel">
          <Icon aria-label={label} />
          <span className="label">{label}</span>
        </span>
      ))}
    </aside>
  );
}
