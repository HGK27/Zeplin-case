"use client";

import Slider from "../components/organisms/Slider/Slider";
import Pageinfo from "@/components/organisms/Pageinfo/Pageinfo";
import Carousel from "@/components/organisms/Carousel/Carousel";
import Banner from "@/components/organisms/Banner/Banner";
import Blog from "@/components/organisms/Blog/Blog";

export default function Home() {
  return (
    <main>
      <Slider />
      <Pageinfo />
      <Carousel />
      <Banner />
      <Blog />
    </main>
  );
}
