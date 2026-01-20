import "./Footer.scss";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import EditorIcon from "@/components/icons/EdıtorIcon";
import MessageIcon from "@/components/icons/MessageIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Üst Kısım: İletişim Bilgileri */}
        <div className="footer__top row justify-content-between align-items-center g-5">
          {/* Dergi Editörü */}
          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="footer__icon-circle">
              <EditorIcon size={24} />
            </div>
            <div className="footer__info">
              <span className="footer__label">Dergi Editörü</span>
              <h6 className="footer__value">Prof. Dr. Elif Başkaya Acar</h6>
              <a href="mailto:elif@gmail.com" className="footer__link">
                <EmailIcon size={12} />
                elif@gmail.com
              </a>
            </div>
          </div>

          {/* Mail Adresi */}
          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="footer__icon-circle">
              <MessageIcon size={24} />
            </div>
            <div className="footer__info">
              <span className="footer__label">Mail Adresi</span>
              <h6 className="footer__value">profuture@gmail.com</h6>
            </div>
          </div>

          {/* Adres Bilgisi */}
          <div className="col-md-4 d-flex align-items-center gap-3">
            <div className="footer__icon-circle">
              <LocationIcon size={24} />
            </div>
            <div className="footer__info">
              <h6 className="footer__value">Profuture Teknoloji Yayınevi</h6>
              <p className="footer__text">
                Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
              </p>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />
        <div className="footer__disclaimer">
          <p>
            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak
            gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler
            yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin
            kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir.
            Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve
            kabul etmiş sayılır.
          </p>
        </div>
      </div>

      {/* Alt Kısım: Kırmızı Şerit */}
      <div className="footer__bottom-bar">
        <p className="mb-0">
          Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
        </p>
      </div>
    </footer>
  );
}
