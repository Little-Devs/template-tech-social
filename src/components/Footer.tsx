import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";
import { PrivacyIndicator } from "./PrivacyIndicator";
import { site } from "@/data/site";
import { getSponsors } from "@/lib/sponsors";

const Footer = () => {
  const sponsors = getSponsors(true);

  return (
    <footer className="border-t-2 border-primary bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-primary text-glow break-words">
              &gt; {site.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide break-words">
              {site.tagline}
              <br />
              <span className="hidden sm:inline">LOREM IPSUM DOLOR SIT AMET</span>
              <span className="inline sm:hidden">LOREM IPSUM</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base break-words">&gt; PLATFORM</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-smooth uppercase tracking-wider break-words">
                  <span className="hidden sm:inline">[BROWSE EVENTS]</span>
                  <span className="inline sm:hidden">[EVENTS]</span>
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-smooth uppercase tracking-wider break-words">
                  [COMMUNITY]
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-muted-foreground hover:text-primary transition-smooth uppercase tracking-wider break-words">
                  [SPONSORS]
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base break-words">&gt; CITIES</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              {site.cities.map((city) => (
                <li key={city} className="break-words">
                  &gt; {city.toUpperCase()} [ACTIVE]
                </li>
              ))}
              <li className="break-words">
                <span className="hidden sm:inline">&gt; MORE [COMING SOON]</span>
                <span className="inline sm:hidden">&gt; MORE [SOON]</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary text-sm md:text-base break-words">&gt; SPONSORS</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {sponsors.map((sponsor) => (
                <li key={sponsor.id}>
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth uppercase tracking-wider break-words"
                  >
                    [{sponsor.title.toUpperCase().replace(/ /g, "_")}]
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t-2 border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-muted-foreground uppercase tracking-wider">
              <Link to="/terms" className="hover:text-primary transition-smooth">
                [TERMS]
              </Link>
              <span className="text-primary">//</span>
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                [PRIVACY]
              </Link>
              <span className="text-primary">//</span>
              <Link to="/cookies" className="hover:text-primary transition-smooth">
                [COOKIES]
              </Link>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth border-2 border-primary p-2 hover:border-glow">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth border-2 border-primary p-2 hover:border-glow">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth border-2 border-primary p-2 hover:border-glow">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
            <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider text-center sm:text-left break-words">
              &copy; {new Date().getFullYear()} {site.name} // ALL RIGHTS RESERVED
            </p>
            <PrivacyIndicator />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
