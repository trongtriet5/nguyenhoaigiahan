import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Nguyen Hoai Gia Han | Employer Branding",
  description: "Portfolio of Nguyen Hoai Gia Han - Connecting great talents with exceptional cultures through strategic and human-centered branding.",
  keywords: ["Employer Branding", "Recruitment Marketing", "Talent Marketing", "Portfolio", "Gia Han"],
  openGraph: {
    title: "Nguyen Hoai Gia Han | Employer Branding",
    description: "Connecting great talents with exceptional cultures through strategic and human-centered branding.",
    type: "website",
    locale: "vi_VN",
    siteName: "Gia Han Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen text-foreground bg-background selection:bg-primary-300 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
