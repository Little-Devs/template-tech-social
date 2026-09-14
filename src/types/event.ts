export interface EventLocation {
  venue: string;
  address: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  isVirtual: boolean;
  virtualLink?: string;
}

export interface CoHost {
  uid: string;
  displayName: string;
  photoURL?: string;
  status: "active";
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  images?: string[];
  startDate: Date;
  endDate?: Date;
  timezone: string;
  location: EventLocation;
  category: string;
  tags: string[];
  capacity?: number;
  attendeeCount: number;
  featured: boolean;
  hostName: string;
  hostPhoto?: string;
  coHosts?: CoHost[];
  showHosts?: boolean;
  sponsorIds?: string[];
  externalUrl?: string;
}
