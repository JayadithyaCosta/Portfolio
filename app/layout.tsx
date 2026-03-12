import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.chathurangacosta.dev"),
  title: {
    default: "Chathuranga Costa | Senior Full-Stack + AI Engineer",
    template: "%s | Chathuranga Costa"
  },
  description:
    "Recruiter-focused portfolio of Chathuranga Costa, a senior full-stack engineer delivering cloud-native systems and AI-integrated products.",
  openGraph: {
    title: "Chathuranga Costa | Senior Full-Stack + AI Engineer",
    description:
      "Cloud-native full-stack architecture, AI integrations, and production-grade engineering leadership.",
    type: "website",
    url: "https://portfolio.chathurangacosta.dev"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-[var(--font-body)]">
        <Nav />
        <main className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
