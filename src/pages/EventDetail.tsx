import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowLeft, Share2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getEvent } from "@/lib/events";
import { getSponsorsByIds } from "@/lib/sponsors";
import { formatEventDate } from "@/lib/utils";
import SponsorMark from "@/components/SponsorMark";
import DOMPurify from "dompurify";

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const event = id ? getEvent(id) : null;
  const sponsors = event?.sponsorIds ? getSponsorsByIds(event.sponsorIds) : [];

  const sanitizedContent = useMemo(() => {
    if (!event?.content) return "";
    return DOMPurify.sanitize(event.content, {
      ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a", "img", "blockquote", "code", "pre"],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "class"],
      ALLOW_DATA_ATTR: false,
    });
  }, [event?.content]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center border-2 border-primary p-12 bg-card">
            <h1 className="text-4xl font-bold mb-4 text-primary text-glow">&gt; ERROR_404</h1>
            <p className="text-muted-foreground mb-6 uppercase tracking-wider">&gt; EVENT_NOT_FOUND</p>
            <Button asChild variant="hero">
              <Link to="/events">[RETURN_TO_EVENTS]</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = async () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "> LINK_COPIED",
      description: "> Event URL copied to clipboard",
      className: "border-2 border-primary bg-card text-foreground",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/events">
              <ArrowLeft className="mr-2 w-4 h-4" />
              <span className="hidden sm:inline">[BACK TO EVENTS]</span>
              <span className="inline sm:hidden">[BACK]</span>
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="border-2 border-primary p-4 md:p-6 bg-card">
                {event.featured && (
                  <Badge variant="default" className="mb-4 uppercase tracking-wider border-0">
                    <span className="hidden sm:inline">[FEATURED EVENT]</span>
                    <span className="inline sm:hidden">[FEATURED]</span>
                  </Badge>
                )}
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-primary text-glow break-words">
                  {event.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-6 break-words">
                  {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="border-2 border-primary p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">&gt; DATE</span>
                    </div>
                    <p className="text-sm font-bold break-words">
                      {formatEventDate(event.startDate, event.timezone)}
                    </p>
                  </div>
                  <div className="border-2 border-primary p-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">&gt; LOCATION</span>
                    </div>
                    <p className="text-sm font-bold break-words">
                      {event.location.isVirtual ? "Virtual Event" : `${event.location.venue}, ${event.location.city}`}
                    </p>
                  </div>
                  <div className="border-2 border-primary p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">&gt; ATTENDEES</span>
                    </div>
                    <p className="text-sm font-bold break-words">{event.attendeeCount} REGISTERED</p>
                  </div>
                </div>

                <Badge variant="secondary" className="uppercase tracking-wider border border-primary">
                  [CATEGORY: {event.category}]
                </Badge>
              </div>

              <div className="border-2 border-primary p-4 md:p-6 bg-card">
                <h2 className="text-lg md:text-2xl font-bold mb-4 text-primary text-glow break-words">
                  <span className="hidden sm:inline">&gt; EVENT DETAILS</span>
                  <span className="inline sm:hidden">&gt; DETAILS</span>
                </h2>
                <div
                  className="space-y-4 text-muted-foreground prose prose-sm max-w-none prose-headings:text-primary prose-headings:font-bold prose-headings:break-words prose-p:text-muted-foreground prose-p:break-words prose-ul:list-none prose-li:before:content-['>'] prose-li:before:text-primary prose-li:before:mr-2"
                  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary border-glow bg-card lg:sticky lg:top-24">
                <CardHeader>
                  <CardTitle className="text-primary text-glow">&gt; ATTEND</CardTitle>
                  <CardDescription className="uppercase tracking-wider text-xs">
                    <span className="hidden sm:inline">&gt; JOIN THIS MEETUP</span>
                    <span className="inline sm:hidden">&gt; JOIN</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 border-2 border-primary">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">&gt; PRICE</p>
                    <p className="text-3xl font-bold text-primary text-glow">FREE</p>
                  </div>
                  {event.externalUrl ? (
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href={event.externalUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        <span className="hidden sm:inline">[GET TICKETS]</span>
                        <span className="inline sm:hidden">[TICKETS]</span>
                      </a>
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center uppercase tracking-wider">
                      &gt; SHOW UP // DETAILS ABOVE
                    </p>
                  )}
                  <Button variant="outline" className="w-full" onClick={handleShare}>
                    <Share2 className="mr-2 w-4 h-4" />
                    <span className="hidden sm:inline">[SHARE EVENT]</span>
                    <span className="inline sm:hidden">[SHARE]</span>
                  </Button>
                  <div className="text-xs text-muted-foreground text-center uppercase tracking-wider">
                    &gt; {event.attendeeCount} ATTENDEES REGISTERED
                  </div>
                </CardContent>
              </Card>

              {event.showHosts !== false && (
                <Card className="border-2 border-primary bg-card">
                  <CardHeader>
                    <CardTitle className="text-primary">&gt; ORGANIZER{event.coHosts && event.coHosts.length > 0 ? "S" : ""}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      {event.hostPhoto && (
                        <img src={event.hostPhoto} alt={event.hostName} className="w-12 h-12 rounded-full border-2 border-primary" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm mb-1 font-bold break-words">{event.hostName}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          <span className="hidden sm:inline">&gt; PRIMARY HOST</span>
                          <span className="inline sm:hidden">&gt; HOST</span>
                        </p>
                      </div>
                    </div>

                    {event.coHosts && event.coHosts.length > 0 && (
                      <>
                        <hr className="border-primary opacity-30" />
                        {event.coHosts.map((coHost) => (
                          <div key={coHost.uid} className="flex items-center gap-3">
                            {coHost.photoURL && (
                              <img src={coHost.photoURL} alt={coHost.displayName} className="w-12 h-12 rounded-full border-2 border-primary" />
                            )}
                            <div>
                              <p className="text-sm mb-1 font-bold">{coHost.displayName}</p>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                &gt; CO-HOST
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </CardContent>
                </Card>
              )}

              {sponsors.length > 0 && (
                <Card className="border-2 border-primary bg-card">
                  <CardHeader>
                    <CardTitle className="text-primary">&gt; SPONSORS</CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      <span className="hidden sm:inline">&gt; EVENT SPONSORS</span>
                      <span className="inline sm:hidden">&gt; SPONSORS</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sponsors.map((sponsor) => (
                      <a
                        key={sponsor.id}
                        href={sponsor.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-2 border-primary p-3 hover:border-glow transition-all duration-300 bg-black group"
                      >
                        <div className="flex items-center justify-center h-12">
                          <SponsorMark sponsor={sponsor} className="max-h-full max-w-full text-xs group-hover:text-glow transition-colors" />
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
