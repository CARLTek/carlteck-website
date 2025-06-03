'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

type GallerySwiperProps = {
  media: MediaItem[];
};

export default function GallerySwiper({ media }: GallerySwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="rounded-lg"
      >
        {media.map((item, i) => (
          <SwiperSlide key={i}>
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`media ${i + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            ) : (
              <video
                controls
                preload="metadata"
                className="w-full h-96 object-cover rounded-lg"
                poster="/gallery/video-thumb.jpg"
              >
                <source src={item.src + '#t=0.1'} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className="mt-4"
      >
        {media.map((item, i) => (
          <SwiperSlide key={i}>
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`thumb ${i + 1}`}
                className="w-full h-24 object-cover rounded border border-gray-300 cursor-pointer"
              />
            ) : (
              <video
                className="w-full h-24 object-cover rounded border border-gray-300 cursor-pointer"
                muted
                preload="metadata"
              >
                <source src={item.src + '#t=0.1'} type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
