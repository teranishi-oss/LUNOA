import React from 'react';

interface SectionPhotoBgProps {
  image: string;
  alt: string;
  opacity?: number;
}

export function SectionPhotoBg({ image, alt, opacity = 0.6 }: SectionPhotoBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-cream-50" style={{ opacity }} />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #FAF8F3 0%, transparent 14%, transparent 86%, #FAF8F3 100%)',
        }}
      />
    </div>
  );
}
