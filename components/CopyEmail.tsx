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
          <span className="bg-grey-800 absolute left-0 mb-4 text-sm text-white p-1">
            {copySuccess}
          </span>
        )}
      </span>
    );
}

export default CopyEmail