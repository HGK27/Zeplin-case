import "./Card2.scss";
import Button from "@/components/atom/Button/Button";
import PdfIcon from "@/components/icons/PdfIcon";
import ViewIcon from "@/components/icons/ViewIcon"; // Göz ikonu
import DownloadIcon from "@/components/icons/DownloadIcon"; // İndirme ikonu
import EmailIcon from "@/components/icons/EmailIcon";
import Badge from "@/components/atom/Badge/Badge";
import PagesIcon from "@/components/icons/PagesIcon";
import AuthorIcon from "@/components/icons/AuthorIcon";

export default function Card2({
  category = "İklim",
  type = "Araştırma Makalesi",
  title = "Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi",
  pages = "12-28",
  authors = "Elif Başkaya Acar, Emre Taran, Halil Başar",
}) {
  return (
    <div className="card-article">
      <div className="card-article__top d-flex gap-2">
        <Badge variant="primary" size="md">
          {category}
        </Badge>
        <Badge variant="default" size="md">
          {type}
        </Badge>
      </div>

      <div className="card-article__body d-flex align-items-center justify-content-between">
        <div className="card-article__content">
          <div className="d-flex align-items-center gap-2 card-article__title-group">
            <PdfIcon />
            <h6 className="card-article__title">{title}</h6>
          </div>

          <div className="card-article__meta d-flex align-items-center gap-4">
            <div className="meta-item">
              <span className="meta-icon">
                <PagesIcon />
              </span>
              <span>
                Sayfa: <strong>{pages}</strong>
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">
                <AuthorIcon />
              </span>
              <span>{authors}</span>
            </div>
          </div>
        </div>

        <div className="card-article__actions d-flex align-items-center gap-2">
          <Button variant="outline" circle icon={EmailIcon} size="lg" />
          <Button variant="outline" circle icon={DownloadIcon} size="lg" />
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
  );
}
