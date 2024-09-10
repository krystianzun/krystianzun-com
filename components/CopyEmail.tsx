"use client";

import React, { useState } from "react";

const CopyEmail = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const copyToClipboard = () => {
    const email = "krystian.zun@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopyStatus("Copied!");
        setIsHovering(false); // Hide the "Click to copy" message
        setTimeout(() => setCopyStatus(""), 1000); // Reset after 1 seconds
      })
      .catch(() => {
        setCopyStatus("Failed to copy");
        setTimeout(() => setCopyStatus(""), 1000);
      });
  };

  return (
    <span className="relative inline-block group">
      <span
        className="border-b-2 border-gray-300 group-hover:border-gray-800 cursor-pointer font-medium transition-colors duration-200"
        onClick={copyToClipboard}
        onMouseEnter={() => !copyStatus && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        krystian.zun@gmail.com
      </span>
      {isHovering && !copyStatus && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-0.5 px-2 py-1 text-white bg-gray-800 whitespace-nowrap">
          Click to copy
        </span>
      )}
      {copyStatus && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-0.5 px-2 py-1 text-white bg-green-available whitespace-nowrap">
          {copyStatus}
        </span>
      )}
    </span>
  );
};

export default CopyEmail;
