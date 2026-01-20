import "./Blog.scss";
import TitleGroup from "@/components/atom/TitleGroup/TitleGroup";
import Card2 from "@/components/molecules/Card2/Card2";
import Image from "next/image";
import blogimage from "@/assets/images/blogimage.webp";
import Button from "@/components/atom/Button/Button";
import DownloadIcon from "@/components/icons/DownloadIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="magazine-showcase">
              <div className="magazine-showcase__card">
                <div className="magazine-showcase__image-container">
                  <Image
                    src={blogimage}
                    alt="Son Sayı Dergi Kapağı"
                    className="magazine-showcase__img"
                  />
                </div>

                <div className="magazine-showcase__footer d-flex justify-content-center">
                  <Button
                    variant="outline"
                    circle
                    icon={DownloadIcon}
                    size="lg"
                  />
                  <Button
                    variant="primary"
                    icon={ViewIcon}
                    iconPosition="left"
                    size="lg"
                  >
                    Görüntüle
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 blog-section__content">
            <div className="blog-section__header">
              <TitleGroup
                title="Güncel Yazılar"
                subtitle="Profuture Teknoloji Dergisi"
              />
              <div className="carousel_view-all">
                <Button variant="outline" icon={ArrowRightIcon} size="lg">
                  Tümünü Görüntüle
                </Button>
              </div>
            </div>

            <div className="blog-section__cards d-flex flex-column">
              {[0, 1, 2, 3].map((item, index) => (
                <Card2 key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
