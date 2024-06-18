"use client";
import React from 'react'
import { useState } from 'react'

function CopyEmail() {
    const [copySuccess, setCopySuccess] = useState('');
  
    const copyToClipboard = () => {
      const email = 'krystian.zun@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
      }).catch(() => {
        setCopySuccess('Failed to copy');
      });
    };
  
    return (
      <span className="relative">
        <span
          className="border-b-2 border-grey-300 hover:border-grey-800 cursor-pointer font-medium"
          onClick={copyToClipboard}
        >
          krystian.zun@gmail.com
        </span>
        {copySuccess && (
          <span className="absolute left-0 mt-1 text-sm text-green-500">
            {copySuccess}
          </span>
        )}
      </span>
    );
}

export default CopyEmail