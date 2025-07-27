import { useState } from "react";
import { Home, Search, User, Bell, Settings } from "lucide-react";
import clsx from "clsx";
import WhiteLogo from "@/assets/WhiteLogo.png";
import BlackLogo from "@/assets/BlackLogo.png";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", icon: Home, color: "text-black", route: "#home" },
  { name: "Search", icon: Search, color: "text-green-500", route: "#search" },
  { name: "Profile", icon: User, color: "text-purple-500", route: "#profile" },
  {
    name: "Notifications",
    icon: Bell,
    color: "text-orange-500",
    route: "#notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "text-slate-600",
    route: "#settings",
  },
];

const MagicBar = () => {
  const { theme } = useTheme();

  const LogoImage = theme === "dark" ? WhiteLogo : BlackLogo;
  const [active, setActive] = useState("Home");

  return (
    <>
      <div>
        <div style={{
            width: "100px",
            height: "100px",
            padding: "20px"
        }}>
          <img
            src={LogoImage}
            className="w-90 h-full object-cover rounded-lg"
            alt="Back of Card"
          />
        </div>
      </div>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white px-4 py-2 shadow-lg rounded-full flex gap-4 items-center border border-gray-200">
        {navItems.map(({ name, icon: Icon, color, route }) => (
          <a
            href={route}
            key={name}
            onClick={() => setActive(name)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium",
              active === name
                ? "bg-black text-white"
                : "text-black hover:bg-muted"
            )}
          >
            <Icon
              size={18}
              className={clsx(active === name ? "text-white" : color)}
            />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default MagicBar;
