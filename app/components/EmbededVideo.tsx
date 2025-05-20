"use client";
import React, { useState } from "react";
import Image from "next/image";

interface VideoProps {
  thumbnail: string;
  link: string;
}

const EmbededVideo: React.FC<VideoProps> = ({ thumbnail, link }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="w-full aspect-video relative">
      {!isVideoPlaying ? (
        <div
          className="w-full h-full bg-black relative cursor-pointer"
          onClick={handlePlayClick}
        >
          {/* Thumbnail (optional): you can use your own thumbnail image */}
          <Image
            src={thumbnail}// Make sure this image is in the public folder
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Custom Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full rounded-lg"
          src={link}
          title="About CARL"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default EmbededVideo;
