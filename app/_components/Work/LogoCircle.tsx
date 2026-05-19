import Image from "next/image";

export default function LogoCircle({
  src,
  color,
  name,
}: {
  src?: string;
  color?: string;
  name: string;
}) {
  if (src) {
    return (
      <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={src}
          alt={name}
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <div
      className="w-8 h-8 rounded-full border-2 border-white shrink-0 flex items-center justify-center text-white text-[9px] font-bold"
      style={{ backgroundColor: color ?? "#6B7280" }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
