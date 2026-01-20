import "./Pageinfo.scss";
import Image from "next/image";
import dergison from "@/assets/images/dergison.webp";
import TitleGroup from "@/components/atom/TitleGroup/TitleGroup";
import Button from "@/components/atom/Button/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function Pageinfo() {
  return (
    <div className="container">
      <div className="pageinfo">
        <div className="pageinfo_left">
          <TitleGroup
            subtitle="Dergi Amacı ve Kapsamı"
            title="Profuture Teknoloji Dergisi"
          />
          <p>
            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan;
            teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri
            ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir
            araya getiren, uluslararası hakemli ve açık erişimli bir akademik
            yayındır.
          </p>
          <Button variant="outline" icon={ArrowRightIcon} size="lg">
            Detay
          </Button>
        </div>
        <div className="pageinfo_right">
          <Image
            src={dergison}
            alt="Dergi Son Sayı"
            className="pageinfo_image"
          />
        </div>
      </div>
    </div>
  );
}
