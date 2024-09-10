"use client";

import React, { useState, useEffect, useRef } from "react";

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
  successMessage = "Copied!",
  failureMessage = "Failed to copy",
  hoverMessage = "Click to copy",
}) => {
  const [copyStatus, setCopyStatus] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus(successMessage);
        setIsHovering(false);
        setTimeout(() => setCopyStatus(""), 1000);
      })
      .catch(() => {
        setCopyStatus(failureMessage);
        setTimeout(() => setCopyStatus(""), 1000);
      });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovering && !copyStatus) return;

    const updatePosition = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const tooltipRect = tooltipRef.current!.getBoundingClientRect();

      const targetX = e.clientX - containerRect.left;
      const targetY = e.clientY - containerRect.top - tooltipRect.height - 15;

      setPosition((prevPos) => ({
        x: prevPos.x + (targetX - prevPos.x) * 0.15,
        y: prevPos.y + (targetY - prevPos.y) * 0.15,
      }));

      animationRef.current = requestAnimationFrame(updatePosition);
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(updatePosition);
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => !copyStatus && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <span onClick={copyToClipboard}>{displayText || text}</span>
      {(isHovering || copyStatus) && (
        <span
          ref={tooltipRef}
          className={`absolute z-10 px-2 py-1 text-white whitespace-nowrap font-normal pointer-events-none transform -translate-x-1/2 ${
            copyStatus ? "bg-green-available" : "bg-gray-800"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transition: "none",
          }}
        >
          {copyStatus || hoverMessage}
        </span>
      )}
    </div>
  );
};

export default CopyText;
