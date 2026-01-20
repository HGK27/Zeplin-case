"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SlideItem from "@/components/atom/SlideItem/SlideItem";
import sliderData from "@/data/sliderData.json"; // JSON'u içe aktar

// Görselleri import et (Next.js için statik import performanslıdır)
import hero1 from "@/assets/images/slide1.webp";
import hero2 from "@/assets/images/slide2.webp";

import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

export default function Slider() {
  // JSON'daki veriye görsel objelerini ekliyoruz
  const images = [hero1, hero2];

  return (
    <section className="heroSlider">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={false}
        pagination={{ clickable: true }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <SlideItem
              {...slide}
              imageSrc={images[index]} // Görseli sırayla ata
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
