import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-mds`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
