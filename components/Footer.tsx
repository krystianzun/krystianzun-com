import React from "react";
import Link from "next/link";
import CopyText from "./CopyText";

const links = [
  { name: "Resume", link: "https://read.cv/krystianzun" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/krystianzun/" },
  { name: "Twitter", link: "https://x.com/krystianzun" },
  { name: "Instagram", link: "https://www.instagram.com/krystianzun/" },
  { name: "GitHub", link: "https://github.com/krystianzun" },
  { name: "Newsletter", link: "https://krystianzun.substack.com/" },
];

function Footer() {
  return (
    <footer>
      <h3 className="pb-4 text-grey-800">Links</h3>
      <div className="space-y-1">
        {links.map((item) => (
          <div key={item.name}>
            <Link href={item.link} target="_blank">
              <span className="text-grey-500 hover:text-grey-800">
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-grey-500 hover:text-grey-800 cursor-pointer inline-block mt-1">
        <CopyText
          text="krystian.zun@gmail.com"
          displayText="krystian.zun@gmail.com"
          hoverMessage="Click to copy"
        />
      </div>
      <div className="text-grey-500 mt-14">
        ©{new Date().getFullYear()} Krystian Zun, London{" "}
      </div>
    </footer>
  );
}

export default Footer;
