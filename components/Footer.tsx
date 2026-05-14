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
      <div className="text-muted mt-14">
        ©{new Date().getFullYear()} Krystian Zun, London{" "}
      </div>
    </footer>
  );
}

export default Footer;
