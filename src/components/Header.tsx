// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';
// import WhiteLogo from "@/assets/WhiteLogo.png";
// import BlackLogo from "@/assets/BlackLogo.png";
// import { ThemeToggle } from './ThemeToggle';
// import { useTheme } from 'next-themes';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useTheme();

//   const LogoImage = theme === "dark" ? WhiteLogo : BlackLogo;

//   const navItems = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Portfolio', href: '#portfolio' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 padding: "20px",
//               }}
//             >
//               <img
//                 src={LogoImage}
//                 className="w-90 h-full object-cover rounded-lg"
//                 alt="Back of Card"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-muted-foreground hover:text-foreground transition-colors duration-200"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Theme Toggle and CTA Button */}
//           <div className="hidden md:flex items-center gap-2">
//             <ThemeToggle />
//             <Button
//               variant="default"
//               className="bg-primary text-primary-foreground hover:bg-accent"
//             >
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-foreground"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <nav className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <div className="px-3 pt-2 flex flex-col space-y-2">
//                 <div className="flex justify-center">
//                   <ThemeToggle />
//                 </div>
//                 <Button
//                   variant="default"
//                   className="w-full bg-primary text-primary-foreground hover:bg-accent"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WhiteLogo from "@/assets/WhiteLogo.png";
import BlackLogo from "@/assets/BlackLogo.png";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const LogoImage = theme === "dark" ? WhiteLogo : BlackLogo;

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "20px",
                }}
              >
                <img
                  src={LogoImage}
                  className="w-90 h-full object-cover rounded-lg"
                  alt="Back of Card"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Theme Toggle and CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 hover:scale-105"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground transition-all duration-200 hover:bg-accent/50"
              >
                <div className="relative">
                  <Menu
                    size={24}
                    className={`transition-all duration-300 ${
                      isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-sm border-l border-border shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="pt-20 px-6 py-6 h-full overflow-y-auto">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div
                className={`pt-6 flex flex-col space-y-4 transform transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? "700ms" : "0ms",
                }}
              >
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Button
                  variant="default"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 hover:scale-[1.02] shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;