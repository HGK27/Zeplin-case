import "./Banner.scss";
import TitleGroup from "@/components/atom/TitleGroup/TitleGroup";
import BannerIcon from "@/components/icons/BannerIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import Button from "@/components/atom/Button/Button";
import magazines from "@/assets/images/magazines.webp";
import screenshot from "@/assets/images/screenshot.webp";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 banner-wrapper">
            <Image
              src={magazines}
              alt="Dergi Kapakları"
              className="banner__image"
            />
            <div className="banner__content text-center">
              <div className="banner__icon">
                <BannerIcon size={40} />
              </div>
              <TitleGroup
                subtitle="Makale Çağrısı"
                title="Türkiye Ulusal Dijital Veri ve  Altyapıları"
              />
              <p className="banner__text">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu
                ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları,
                büyük veri analitiği, siber güvenlik, akıllı sistemler ve
                dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası
                akademik çalışmalar değerlendirilecektir.
              </p>
              <Button variant="danger" icon={ArrowRightIcon} size="lg">
                Makale Gönder
              </Button>
            </div>
            <Image
              src={screenshot}
              alt="Dergi Screenshot"
              className="banner__screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
