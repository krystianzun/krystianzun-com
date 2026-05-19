"use client";

import { useState } from "react";

export default function InlineEmail({ email }: { email: string }) {
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setHovering(false);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <span
      className="link-muted cursor-pointer"
      onMouseEnter={() => !copied && setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
    >
      {copied ? "Copied!" : hovering ? "Click to copy" : email}
    </span>
  );
}
