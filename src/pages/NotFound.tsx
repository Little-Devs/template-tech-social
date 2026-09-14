import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center border-2 border-primary p-12 bg-card">
          <h1 className="text-4xl font-bold mb-4 text-primary text-glow">&gt; ERROR_404</h1>
          <p className="text-muted-foreground mb-6 uppercase tracking-wider">&gt; PAGE_NOT_FOUND</p>
          <Button asChild variant="hero">
            <Link to="/">[RETURN_HOME]</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
