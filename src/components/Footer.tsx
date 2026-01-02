import logo from "@/assets/bpt-logo.png";

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo & Info */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
            <img src={logo} alt="Brazilian Power Team" className="h-12 w-12 sm:h-16 sm:w-16 invert" />
            <div>
              <p className="font-heading text-lg sm:text-xl text-foreground">BRAZILIAN POWER TEAM</p>
              <p className="font-body text-xs sm:text-sm text-muted-foreground">Qatar • Since 2005</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["home", "about", "classes", "schedule", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => scrollToSection(e, `#${item}`)}
                className="font-body text-xs sm:text-sm text-muted-foreground hover:text-primary smooth-transition uppercase touch-manipulation"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Brazilian Power Team Qatar
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
