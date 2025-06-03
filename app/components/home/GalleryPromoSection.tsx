"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../AnimatedButton";

const galleryImages = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
];

export default function GalleryPromoSection() {
  const router = useRouter();

  return (
    <section className="w-full px-10 lg:px-20 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Swiper Left Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="px-0 md:px-10 lg:px-0 w-full h-full lg:w-[600px] lg:h-[500px]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-full h-full"
            >
              {galleryImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold">Discover Our Gallery</h2>
          <p className="text-muted-foreground">
            Explore moments from our events, robot deployments, and team
            efforts.
          </p>
          <div className="flex justify-center lg:justify-start">
            <AnimatedButton label="Explore Gallery" href="/gallery" />
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
