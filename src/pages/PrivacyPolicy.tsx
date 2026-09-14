import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong>{" "}
            {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Your Privacy Matters</h2>
            <p>
              {site.legalName} ("we," "us," or "our") operates the public website at {site.domain}. This Privacy
              Policy explains what information we collect when you visit the Website.
            </p>
            <p className="mt-3">
              This site does not have user accounts. We honour Global Privacy Control (GPC) and Do Not Track
              (DNT) signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide</h3>
            <p>
              If you email us, we receive the information you include in that message (such as your email address
              and the content of your enquiry).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Stored on Your Device</h3>
            <p>
              We may store privacy preferences in your browser's local storage so we can remember your choices.
              See our{" "}
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Technical Information</h3>
            <p>
              Like most websites, our hosting provider may log basic request data such as IP address, browser
              type, and pages requested, for security and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and secure the Website</li>
              <li>To respond to emails you send us</li>
              <li>To honour privacy signals and stored preferences</li>
            </ul>
            <p className="mt-3">We do not sell personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Privacy Signals</h2>
            <p>
              If your browser sends a GPC or DNT signal, we treat that as a request to disable analytics and
              non-essential tracking. A privacy indicator may appear in the site footer when this mode is active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing</h2>
            <p>
              We may share information only with hosting or infrastructure providers needed to run the Website, or
              if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, or delete personal information
              we hold about you. Contact us to make a request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
            <p>
              Privacy questions:{" "}
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

export default PrivacyPolicy;
