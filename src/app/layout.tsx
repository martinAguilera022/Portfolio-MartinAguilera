import type { Metadata } from "next";

import "./globals.css";
import '@fontsource-variable/onest';

import Home from "./page";

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';



export const metadata: Metadata = {
  title: "Portofolio de Martin Aguilera Desarrollador y Programador Web",
  description: "Este es mi portofolio de desarrollador frontend ",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        
      >
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <NavBar></NavBar>
        <Home></Home>
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
