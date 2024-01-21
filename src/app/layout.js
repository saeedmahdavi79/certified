// Globals Css
import "./globals.css";
// Font
import { estedad } from "@/util/fonts";

// Header
import Header from "@/components/template/Header/Header";
import Footer from "@/components/template/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={estedad.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
