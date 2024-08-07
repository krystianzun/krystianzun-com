import Link from "next/link";
import React from "react";
import Image from "next/image";
import notfoundgif from "@/public/images/404gif.webp";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh m-6">
      <div className="flex flex-col gap-2">
        <Image src={notfoundgif} alt="" width={400} height={250} className="" />
        <Link href="/" className="underline underline-offset-4">
          Move along
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
