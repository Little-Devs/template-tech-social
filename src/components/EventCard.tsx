import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  featured?: boolean;
  coverImage?: string;
  sponsorCount?: number;
}

const EventCard = ({ id, title, description, date, location, attendees, category, featured, coverImage, sponsorCount }: EventCardProps) => {
  return (
    <Card className={`group shadow-card hover:shadow-card-hover transition-smooth overflow-hidden border-2 ${featured ? 'border-primary border-glow' : 'border-primary'} relative min-h-[500px] flex flex-col`}>
      {/* Full Card Background Image with Black Overlay */}
      {coverImage && (
        <>
          <div className="absolute inset-0 bg-black" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 transition-all duration-300 group-hover:opacity-30"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      
      {/* Top Bar */}
      <div className={`h-1 ${featured ? 'bg-primary' : 'bg-muted'} relative z-10`} />
      
      {/* Badges Container */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
        {featured && (
          <Badge variant="default" className="bg-primary border-0 uppercase tracking-wider shadow-lg">[FEATURED]</Badge>
        )}
        {sponsorCount && sponsorCount > 0 && (
          <Badge variant="outline" className="border-primary bg-black/60 uppercase tracking-wider shadow-lg text-xs">
            [{sponsorCount} SPONSOR{sponsorCount !== 1 ? 'S' : ''}]
          </Badge>
        )}
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col flex-1 p-4 sm:p-6">
        <CardHeader className="p-0 mb-auto">
          <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-primary text-glow mb-2 uppercase tracking-wider break-words line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground uppercase tracking-wide text-xs break-words">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="p-0 space-y-3 mt-4">
          <div className="flex items-start text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
            <span className="uppercase tracking-wider text-xs font-mono break-words">{date}</span>
          </div>
          <div className="flex items-start text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
            <span className="uppercase tracking-wider text-xs font-mono break-words">{location}</span>
          </div>
          <div className="flex items-start text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
            <span className="uppercase tracking-wider text-xs font-mono">{attendees} ATTENDEES</span>
          </div>
          <Badge variant="secondary" className="uppercase tracking-wider border border-primary text-xs font-bold break-words">[{category}]</Badge>
        </CardContent>
        
        <CardFooter className="p-0 mt-4">
          <Button asChild variant="hero" className="w-full uppercase tracking-wider font-bold text-xs sm:text-sm">
            <Link to={`/events/${id}`}>
              <span className="hidden sm:inline">[VIEW DETAILS]</span>
              <span className="inline sm:hidden">[VIEW]</span>
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EventCard;
