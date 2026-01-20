import Image from "next/image";
import "./SlideItem.scss";
import DateIcon from "@/components/icons/DateIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import NumberIcon from "@/components/icons/NumberIcon";
import Button from "../Button/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function SlideItem({
  imageSrc,
  imageAlt,
  title,
  titleTag: TitleTag = "h2", // Varsayılan h2
  subtitle,
  desc,
  bookmark,
  number,
  date,
}) {
  return (
    <div className="heroSlide">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="heroSlide__image"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="heroSlide__overlay">
              <TitleTag>
                <span className="heroSlide__subtitle"> {subtitle}</span>
                <span className="heroSlide__title">{title}</span>
              </TitleTag>

              <p className="heroSlide__desc">{desc}</p>

              <div className="heroSlide__meta">
                <span>
                  <BookmarkIcon size={17} className="heroSlide__meta-icon" />
                  Cilt: <strong>{bookmark}</strong>
                </span>
                <span>
                  <NumberIcon size={17} className="heroSlide__meta-icon" />
                  Sayı: <strong>{number}</strong>
                </span>
                <span>
                  <DateIcon size={17} className="heroSlide__meta-icon" />
                  {date}
                </span>
              </div>
              <Button variant="primary" icon={ArrowRightIcon} size="lg">
                Dergiyi Görüntüle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
