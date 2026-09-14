import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { getPublishedEvents } from "@/lib/events";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { formatEventDateSimple } from "@/lib/utils";
import { cityLine } from "@/data/site";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const events = getPublishedEvents();

  const categories = ["all", ...Array.from(new Set(events.map((event) => event.category)))];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12 border-t-2 border-primary">
        <div className="container px-4">
          <div className="mb-6 md:mb-8 border-2 border-primary p-4 md:p-6 bg-card">
            <div className="text-xs uppercase tracking-widest text-primary mb-2">&gt; BROWSE.MEETUPS</div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-primary text-glow break-words">
              <span className="hidden sm:inline">&gt; FIND YOUR NEXT MEETUP</span>
              <span className="inline sm:hidden">&gt; FIND MEETUPS</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-4 md:mb-6 uppercase tracking-wider break-words">
              <span className="hidden sm:inline">&gt; {cityLine()} // MORE CITIES SOON</span>
              <span className="inline sm:hidden">&gt; {cityLine()}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
                <Input
                  type="text"
                  placeholder="> SEARCH EVENTS..."
                  className="pl-10 border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground uppercase"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48 border-2 border-primary uppercase tracking-wider">
                  <SelectValue placeholder="ALL CATEGORIES" />
                </SelectTrigger>
                <SelectContent className="border-2 border-primary bg-card">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="uppercase tracking-wider">
                      {category === "all" ? "[ALL CATEGORIES]" : `[${category}]`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 text-xs text-muted-foreground uppercase tracking-wider">
              &gt; FOUND: {filteredEvents.length} EVENTS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
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
            ) : (
              <div className="col-span-full text-center py-12 border-2 border-primary p-12 bg-card">
                <p className="text-xl text-primary text-glow mb-2">&gt; NO_RESULTS</p>
                <p className="text-muted-foreground uppercase tracking-wider text-sm">
                  &gt; NO_EVENTS_MATCH_YOUR_CRITERIA
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
