import "./Card.scss";
import Image from "next/image";
import PdfIcon from "../../icons/PdfIcon";
import cardImage from "@/assets/images/cardimage.webp";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Button from "@/components/atom/Button/Button";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import NumberIcon from "@/components/icons/NumberIcon";
import DateIcon from "@/components/icons/DateIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import Badge from "@/components/atom/Badge/Badge";

export default function Card({
  badge = "Dergi",
  title = "Teknoloji ve Dijital Dergisi",
  date = "Aralık 2025",
  bookmark = "1",
  number = "1",
}) {
  return (
    <div className="card magazine-card">
      <div className="row g-0">
        <div className="col-sm-5">
          <Image src={cardImage} className="card-image" alt="Magazine Cover" />
        </div>
        <div className="col-sm-7">
          <div className="card-header">
            <div className="card-icon">
              <PdfIcon />
            </div>
            <div className="card-new-badge">
              <Badge variant="info" size="sm">
                YENİ
              </Badge>
            </div>
          </div>
          <div className="card-body">
            <div className="card-badge">
              <Badge variant="default">{badge}</Badge>
            </div>
            <h6 className="card-title">{title}</h6>

            <div className="d-flex align-items-center gap-3 mt-3 text-secondary">
              <div className="d-flex align-items-center gap-1">
                <span>
                  <BookmarkIcon size={17} className="heroSlide__meta-icon" />
                  Cilt: <strong>{bookmark}</strong>
                </span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <span>
                  <NumberIcon size={17} className="heroSlide__meta-icon" />
                  Sayı: <strong>{number}</strong>
                </span>
              </div>
            </div>
            <div className="mt-1 text-secondary">
              <span>
                <DateIcon size={17} className="heroSlide__meta-icon" />
                <b>{date}</b>
              </span>
            </div>
          </div>
          <div className="card-footer">
            <Button variant="outline" icon={ViewIcon} circle size="lg"></Button>
            <Button variant="outline" icon={DownloadIcon} circle></Button>
            <Button variant="outline" icon={ArrowRightIcon} circle></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
