"use client";

import React, { useState } from 'react';

interface CopyTextProps {
  text: string;
  displayText?: string;
  successMessage?: string;
  failureMessage?: string;
  hoverMessage?: string;
}

const CopyText: React.FC<CopyTextProps> = ({
  text,
  displayText,
  successMessage = 'Copied!',
  failureMessage = 'Failed to copy',
  hoverMessage = 'Click to copy'
}) => {
    const [copyStatus, setCopyStatus] = useState('');
    const [isHovering, setIsHovering] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopyStatus(successMessage);
        setIsHovering(false);
        setTimeout(() => setCopyStatus(''), 1000);
      }).catch(() => {
        setCopyStatus(failureMessage);
        setTimeout(() => setCopyStatus(''), 1000);
      });
    };
  
    return (
      <div className="relative inline-block group">
        <span
          onClick={copyToClipboard}
          onMouseEnter={() => !copyStatus && setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {displayText || text}
        </span>
        {isHovering && !copyStatus && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-0.5 px-2 py-1 text-white bg-gray-800 whitespace-nowrap font-normal">
            {hoverMessage}
          </span>
        )}
        {copyStatus && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-0.5 px-2 py-1 text-white bg-green-available whitespace-nowrap font-normal">
            {copyStatus}
          </span>
        )}
      </div>
    );
}

export default CopyText;