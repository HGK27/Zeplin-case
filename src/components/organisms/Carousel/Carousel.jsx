"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.scss";
import Card from "../../molecules/Card/Card";
import TitleGroup from "../../atom/TitleGroup/TitleGroup";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Button from "@/components/atom/Button/Button";

export default function Carousel() {
  const cards = [0, 1, 2, 3, 4, 5];
  return (
    <div className="carousel container">
      <div className="row">
        <div className="col-lg-12">
          <div className="carousel-header">
            <TitleGroup subtitle="Sayılar" title="Dergiler" />
            <div className="carousel_controller">
              <button
                className="carousel_button carousel_button--left"
                aria-label="Geri"
              >
                <ArrowRightIcon />
              </button>
              <button
                className="carousel_button carousel_button--right"
                aria-label="İleri"
              >
                <ArrowRightIcon />
              </button>
            </div>
            <div className="carousel_view-all">
              <Button variant="outline" icon={ArrowRightIcon} size="lg">
                Tümünü Görüntüle
              </Button>
            </div>
          </div>
          <div className="carousel_main">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={20}
              navigation={{
                prevEl: ".carousel_button--left",
                nextEl: ".carousel_button--right",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="carousel_card">
                    <Card />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
