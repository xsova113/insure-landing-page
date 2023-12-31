import Footer from "./components/Footer";
import Heading from "./components/Heading";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Insure Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSerif.className} min-h-screen bg-white text-[16px]`}>
        <Heading />
        {children}
        <Footer />
      </body>
    </html>
  );
}
