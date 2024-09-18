import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import AsideLeft from "../components/AsideLeft";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Perla - Sembramos Oportunidades",
  description: "La Perla, Empresa de cultivos y productos agrícolas",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className="">
          <Navbar />
          <AsideLeft />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
