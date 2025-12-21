import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  defaultImage?: string;
  alt: string;
  className?: string;
  onImageChange?: (imageUrl: string) => void;
  height?: string;
}

export function ImageUpload({
  defaultImage,
  alt,
  className = "",
  onImageChange,
  height = "400px"
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(defaultImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setImage(defaultImage || null);
  }, [defaultImage]);

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      setError('JPG, PNG, WebP形式のみ対応しています');
      return false;
    }

    if (file.size > maxSize) {
      setError('ファイルサイズは5MB以下にしてください');
      return false;
    }

    setError(null);
    return true;
  };

  const handleFile = (file: File) => {
    if (!validateFile(file)) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
      onImageChange?.(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/jpg,image/png,image/webp';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleFile(file);
      }
    };
    input.click();
  };

  if (image) {
    return (
      <div className="relative group" style={height === "auto" ? {} : { height }}>
        <img
          src={image}
          alt={alt}
          className={className}
          crossOrigin="anonymous"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error('Failed to load:', target.src);
            target.src = '/images/rogo.png';
          }}
          style={height === "auto" ? {} : { height: '100%' }}
        />
        <button
          onClick={handleClick}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20"
        >
          <div className="text-white text-center">
            <Upload className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-medium">画像を変更</div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer ${
          isDragging
            ? 'bg-gray-200 border-gray-400'
            : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
        }`}
        style={{
          height: height === "auto" ? "400px" : height,
          minHeight: height === "auto" ? "400px" : undefined
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <div className="text-gray-700 font-medium mb-2">
            画像をドラッグ&ドロップ
          </div>
          <div className="text-gray-500 text-sm">
            またはクリックして選択
          </div>
          <div className="text-gray-400 text-xs mt-2">
            JPG, PNG, WebP (最大5MB)
          </div>
        </div>
      </div>
      {error && (
        <div className="mt-2 text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
}
