import "./global.scss";
import Header from "../components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import CookieBanner from "@/components/organisms/CookieBanner/CookieBanner";

export const metadata = {
  title: "Profuture | Home",
  description: "Profuture Teknoloji Dergisi",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
