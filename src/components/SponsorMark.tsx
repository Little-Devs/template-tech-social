import { Sponsor } from "@/types/sponsor";

interface SponsorMarkProps {
  sponsor: Sponsor;
  className?: string;
}

const SponsorMark = ({ sponsor, className = "" }: SponsorMarkProps) => {
  if (sponsor.logoUrl) {
    return (
      <img
        src={sponsor.logoUrl}
        alt={sponsor.title}
        className={`object-contain ${className}`}
        style={{
          filter: "grayscale(100%) contrast(1.5) brightness(1.2)",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />
    );
  }

  return (
    <span className={`font-bold text-primary uppercase tracking-wider ${className}`}>
      [{sponsor.title.toUpperCase().replace(/ /g, "_")}]
    </span>
  );
};

export default SponsorMark;
