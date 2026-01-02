import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import logo from "@/assets/bpt-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(["home", "about", "classes", "schedule", "contact"]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#classes", label: "Classes" },
    { href: "#schedule", label: "Schedule" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 sm:gap-3"
          >
            <img src={logo} alt="Brazilian Power Team" className="h-10 w-10 sm:h-14 sm:w-14 invert" />
            <div className="hidden sm:block">
              <span className="font-heading text-lg sm:text-xl tracking-wider text-foreground">BRAZILIAN POWER TEAM</span>
              <p className="text-xs text-muted-foreground tracking-widest">QATAR</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative font-body text-sm font-semibold tracking-wider uppercase py-2 smooth-transition ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {/* Active indicator bar */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary smooth-transition origin-left ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+97455758964" className="flex items-center gap-2 text-primary smooth-transition hover:opacity-80">
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm xl:text-base">+974 5575 8964</span>
            </a>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-base xl:text-lg tracking-wider px-4 xl:px-6 smooth-transition"
            >
              JOIN NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden smooth-transition ${
            isMenuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <nav className="flex flex-col gap-2 border-t border-border pt-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-body text-base font-semibold tracking-wider uppercase py-3 px-4 rounded-lg smooth-transition touch-manipulation ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground active:bg-muted"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
              <a href="tel:+97455758964" className="flex items-center justify-center gap-2 text-primary py-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">+974 5575 8964</span>
              </a>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-wider w-full touch-manipulation"
              >
                JOIN NOW
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
