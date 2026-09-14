import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong>{" "}
            {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              Welcome to {site.legalName}. By accessing {site.domain} (the "Website"), you agree to these Terms
              and Conditions. If you do not agree, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Website</h2>
            <p>
              {site.legalName} is a public website for local community meetups and event information.
              Event listings are placeholder content provided for demonstration. Attendance details, venues, and
              third-party ticket links may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of legal majority in your jurisdiction) to use this
              Website. The Website is not intended for anyone under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website in any way that is unlawful or harmful</li>
              <li>Attempt to disrupt, scrape excessively, or interfere with the Website</li>
              <li>Misrepresent affiliation with {site.legalName} or listed events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              Content on this Website, including text, branding, and design, is owned by {site.legalName} or its
              licensors. You may not copy or reuse it without permission, except as allowed by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
            <p>
              The Website may link to sponsor sites, ticket pages, or other third-party websites. We are not
              responsible for those sites or their content, policies, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
            <p>
              The Website is provided "as is". Event information is published in good faith but may be incomplete
              or out of date. We do not guarantee that the Website will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {site.legalName} is not liable for any loss arising from your use
              of the Website or attendance at listed events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes</h2>
            <p>
              We may update these Terms from time to time. The "Last Updated" date will change when we do.
              Continued use of the Website after changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
