import React from 'react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 背景動画 */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(1.2)'
          }}
        >
          <source src="/src/assets/video.webm" type="video/webm" />
          <source src="/src/assets/video.mp4" type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
        {/* 動画が読み込めない場合のフォールバック画像 */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 [video:not([src])_+_&]:opacity-100"
          style={{
            backgroundImage: 'url("src/assets/iyaf6ed5 copy.png")',
            filter: 'brightness(1.2)'
          }}
        />
      </div>
    </section>
  );
}