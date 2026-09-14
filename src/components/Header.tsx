import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-[0_0_15px_hsl(120_100%_50%/0.3)]">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-base sm:text-xl md:text-2xl font-bold text-primary text-glow break-words">
              &gt; {site.name}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/events" className="text-sm font-medium transition-smooth hover:text-primary uppercase tracking-wider">
            [EVENTS]
          </Link>
          <Link to="/community" className="text-sm font-medium transition-smooth hover:text-primary uppercase tracking-wider">
            [COMMUNITY]
          </Link>
          <Link to="/sponsors" className="text-sm font-medium transition-smooth hover:text-primary uppercase tracking-wider">
            [SPONSORS]
          </Link>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/events">BROWSE</Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="border-2 border-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-2 border-primary w-[80vw] sm:w-[385px]">
              <SheetHeader>
                <SheetTitle className="text-primary text-glow">&gt; MENU</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/events"
                  className="text-lg font-medium transition-smooth hover:text-primary uppercase tracking-wider border-2 border-primary p-3 text-center"
                  onClick={closeMobileMenu}
                >
                  [EVENTS]
                </Link>
                <Link
                  to="/community"
                  className="text-lg font-medium transition-smooth hover:text-primary uppercase tracking-wider border-2 border-primary p-3 text-center"
                  onClick={closeMobileMenu}
                >
                  [COMMUNITY]
                </Link>
                <Link
                  to="/sponsors"
                  className="text-lg font-medium transition-smooth hover:text-primary uppercase tracking-wider border-2 border-primary p-3 text-center"
                  onClick={closeMobileMenu}
                >
                  [SPONSORS]
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
