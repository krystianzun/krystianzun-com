"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HelloThere from '@/public/images/hellothere.gif'

const HoverImage: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div className="relative" ref={containerRef}>
      <h2 className='font-medium text-grey-800'>
        <span 
          className='border-b-2 border-grey-300 hover:border-grey-800 relative'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          hello there!
          {isHovering && (
            <div 
              ref={imageRef}
              className="absolute pointer-events-none transition-all duration-200 ease-out cursor-pointer"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y - 8}px`,
                transform: 'translate(-50%, -100%)'
              }}
            >
                <div className="w-[100px] h-[100px] relative">
                    <Image 
                    src={HelloThere}
                    alt="Hover image" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
          )}
        </span> *✲ﾟ*, i'm Krystian 
      </h2>
    </div>
  );
};

export default HoverImage;