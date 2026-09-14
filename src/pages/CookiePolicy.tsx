import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong>{" "}
            {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-3">About This Policy</h2>
            <p>
              This Cookie Policy explains how {site.legalName} uses cookies and similar technologies on{" "}
              {site.domain}. Read it with our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What We Use</h2>
            <p>
              This is a static public website. We do not use authentication cookies or advertising cookies.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">Name</th>
                    <th className="border border-border px-4 py-2 text-left">Purpose</th>
                    <th className="border border-border px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">{site.privacyStorageKey}</td>
                    <td className="border border-border px-4 py-2">
                      Local storage of privacy preferences (not a cookie)
                    </td>
                    <td className="border border-border px-4 py-2">Until you clear site data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Privacy Signals</h2>
            <p>
              If your browser sends Global Privacy Control (GPC) or Do Not Track (DNT), we disable analytics and
              non-essential tracking automatically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third Parties</h2>
            <p>
              Pages may load fonts or other public assets from third-party CDNs. Those providers may set their own
              cookies according to their policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
            <p>
              Questions:{" "}
              <a href={`mailto:${site.privacyEmail}`} className="text-primary hover:underline">
                {site.privacyEmail}
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
