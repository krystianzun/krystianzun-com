import Image from "next/image";
import TiltCard from "@/components/TiltCard";

export default function WorkCover({
  cover,
  coverHover,
  title,
}: {
  cover?: string;
  coverHover?: string;
  title: string;
}) {
  if (!cover) {
    return (
      <div className="w-full h-40 aspect-video rounded-lg bg-gray-100 overflow-hidden mb-3" />
    );
  }

  return (
    <TiltCard className="relative w-full h-70 aspect-video rounded-lg overflow-hidden mb-3 group/cover">
      <Image
        src={cover}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-200 ${coverHover ? "group-hover/cover:opacity-0" : ""}`}
      />
      {coverHover && (
        <Image
          src={coverHover}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200"
        />
      )}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
          transition: "background 0.1s ease",
        }}
      />
    </TiltCard>
  );
}
