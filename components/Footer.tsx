import React from "react";
import Link from "next/link";
import CopyText from "./CopyText";

const links = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/krystianzun/" },
  { name: "Twitter", link: "https://x.com/krystianzun" },
  { name: "GitHub", link: "https://github.com/krystianzun" },
  { name: "Newsletter", link: "https://krystianzun.substack.com/" },
];

function Footer() {
  return (
    <footer className="pb-8">
      <div className="flex items-center justify-between mt-14">
        <div className="text-muted">
          ©{new Date().getFullYear()} London, (ﾉ◕ヮ◕)ﾉ *:･ﾟ
        </div>
        <span className="text-muted bg-gray-100 rounded-full px-2 py-1 text-xs">
          v1.0
        </span>
      </div>
    </footer>
  );
}

export default Footer;
