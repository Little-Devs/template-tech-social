import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import TypewriterText from "@/components/TypewriterText";
import { getPublishedEvents } from "@/lib/events";
import { getSponsors } from "@/lib/sponsors";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatEventDateSimple } from "@/lib/utils";
import heroImage from "@/assets/hero-tech-community.jpg";
import SponsorMark from "@/components/SponsorMark";
import { cityLine } from "@/data/site";

const Index = () => {
  const featuredEvents = getPublishedEvents({ featured: true, limit: 6 });
  const sponsors = getSponsors(true).filter((sponsor) => sponsor.featured);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b-2 border-primary">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="container relative py-16 md:py-24 lg:py-32 px-4">
            <div className="max-w-3xl">
              <div className="text-primary mb-4 text-xs md:text-sm uppercase tracking-widest break-words">
                <TypewriterText
                  text="> LOADING COMMUNITY DATA"
                  speed={100}
                  onComplete={() => setShowSubtitle(true)}
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-glow min-h-[60px] sm:min-h-[80px] md:min-h-[120px] break-words">
                {showSubtitle && (
                  <>
                    <TypewriterText
                      text="LOREM IPSUM?"
                      speed={80}
                      onComplete={() => setShowDescription(true)}
                    />
                    <br />
                    {showDescription && (
                      <TypewriterText
                        text="DOLOR SIT AMET CONSECTETUR"
                        speed={80}
                        onComplete={() => setShowButtons(true)}
                      />
                    )}
                  </>
                )}
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-foreground mb-6 md:mb-8 font-mono break-words overflow-hidden">
                {showButtons && (
                  <>
                    <TypewriterText
                      text="> ADIPISCING ELIT SED DO EIUSMOD"
                      speed={60}
                      showCursor={false}
                    />
                    <br />
                    <span className="hidden sm:inline">
                      <TypewriterText
                        text="> TEMPOR INCIDIDUNT // UT LABORE ET DOLORE"
                        speed={60}
                        delay={800}
                        showCursor={false}
                      />
                    </span>
                    <span className="inline sm:hidden">
                      <TypewriterText
                        text="> TEMPOR INCIDIDUNT // UT LABORE"
                        speed={60}
                        delay={800}
                        showCursor={false}
                      />
                    </span>
                    <br />
                    <TypewriterText
                      text={`> ACTIVE IN: ${cityLine()} // MORE SOON`}
                      speed={60}
                      delay={1600}
                      showCursor={false}
                    />
                  </>
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/events">
                    <span className="hidden sm:inline">[BROWSE EVENTS]</span>
                    <span className="inline sm:hidden">[BROWSE]</span>
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/community">
                    <span className="hidden sm:inline">[JOIN COMMUNITY]</span>
                    <span className="inline sm:hidden">[COMMUNITY]</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 border-b-2 border-primary">
          <div className="container px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary text-glow">&gt; UPCOMING MEETUPS</h2>
                <p className="text-muted-foreground uppercase tracking-wider text-xs">
                  <span className="hidden sm:inline">&gt; LOREM IPSUM // DOLOR SIT AMET</span>
                  <span className="inline sm:hidden">&gt; LOREM IPSUM</span>
                </p>
              </div>
              <Button variant="outline" asChild size="sm">
                <Link to="/events">
                  [VIEW_ALL] <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground uppercase tracking-wider">
                    &gt; NO_FEATURED_EVENTS_YET
                  </p>
                </div>
              ) : (
                featuredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    description={event.description}
                    date={formatEventDateSimple(event.startDate, event.timezone)}
                    location={event.location.isVirtual ? "Virtual Event" : `${event.location.venue}, ${event.location.city}`}
                    attendees={event.attendeeCount}
                    category={event.category}
                    featured={event.featured}
                    coverImage={event.coverImage}
                    sponsorCount={event.sponsorIds?.length || 0}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30 border-b-2 border-primary">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary text-glow">&gt; POWERED BY</h2>
              <p className="text-muted-foreground uppercase tracking-wider text-xs">&gt; SYSTEM SPONSORS</p>
            </div>

            {sponsors.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground uppercase tracking-wider text-sm">
                  &gt; NO_FEATURED_SPONSORS_YET
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative border-2 border-primary px-6 md:px-10 py-4 md:py-6 hover:border-glow transition-all duration-300 bg-black"
                  >
                    <SponsorMark sponsor={sponsor} className="h-12 md:h-16 text-sm" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="border-2 border-primary p-6 md:p-12 text-center bg-card">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary text-glow break-words">
                &gt; LOREM IPSUM DOLOR
              </h2>
              <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 uppercase tracking-wider break-words">
                <span className="hidden sm:inline">&gt; CONSECTETUR ADIPISCING ELIT</span>
                <span className="inline sm:hidden">&gt; CONSECTETUR ADIPISCING</span>
                <br />
                &gt; MEETUPS // PRESENTATIONS // COMMUNITY
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/events">
                  <span className="hidden sm:inline">[BROWSE EVENTS]</span>
                  <span className="inline sm:hidden">[BROWSE]</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
