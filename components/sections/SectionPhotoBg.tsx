import React from 'react';

interface SectionPhotoBgProps {
  image: string;
  alt: string;
  opacity?: number;
}

export function SectionPhotoBg({ image, alt, opacity = 0.6 }: SectionPhotoBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-cream-50" style={{ opacity }} />
    </div>
  );
}
