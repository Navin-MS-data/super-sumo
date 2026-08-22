import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { LiquidGlassNavbar } from "@/components/liquid-glass-navbar";
import { SiteFooter } from "@/components/site-footer";

const creatoDisplay = localFont({
  variable: "--font-creato-display",
  src: [
    { path: "../fonts/CreatoDisplay-Thin.otf", weight: "100", style: "normal" },
    { path: "../fonts/CreatoDisplay-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../fonts/CreatoDisplay-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/CreatoDisplay-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../fonts/CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/CreatoDisplay-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../fonts/CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/CreatoDisplay-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../fonts/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/CreatoDisplay-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../fonts/CreatoDisplay-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../fonts/CreatoDisplay-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../fonts/CreatoDisplay-Black.otf", weight: "900", style: "normal" },
    { path: "../fonts/CreatoDisplay-BlackItalic.otf", weight: "900", style: "italic" },
  ],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Super Sumo — Modern Software Solutions",
  description:
    "Super Sumo builds School ERP, Smart Bus, Sumo Kids, Book Sumo, and Sumo360° — revolutionizing digital experiences for schools and businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${creatoDisplay.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <SmoothScrollProvider>
          <LiquidGlassNavbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
