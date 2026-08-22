import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { LiquidGlassNavbar } from "@/components/liquid-glass-navbar";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
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
      className={`${spaceGrotesk.variable} ${workSans.variable} h-full antialiased`}
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
