import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  aspectRatioClass = 'aspect-[16/9]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#F3EFE6] border border-[#E8E3D6] rounded-xl flex flex-col items-center justify-center p-6 text-center text-[#64736B]`}
      >
        <ImageIcon className="w-8 h-8 text-[#0F6B4A]/50 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium text-[#2D3A34] max-w-xs">
          {fallbackText || alt || 'Nestora Visual Asset'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} w-full`}>
      <img
        src={src}
        alt={alt || 'Nestora image'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F3EFE6] animate-pulse" aria-hidden="true" />
      )}
    </div>
  );
};
