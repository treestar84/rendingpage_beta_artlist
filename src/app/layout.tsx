import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { WebSiteSchema, ProductSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artlist - AI Image Generator & Kids Photo to Art | NanoBanana",
  description: "Transform your child's photos into artistic masterpieces with Artlist AI. The best AI tool for parents to create stories and preserve memories. Powered by NanoBanana.",
  metadataBase: new URL('https://artlist.ai'), // Placeholder
  openGraph: {
    title: "Artlist - AI Image Generator & Kids Photo to Art",
    description: "Transform your child's photos into artistic masterpieces with Artlist AI. Create stories and preserve memories.",
    url: 'https://artlist.ai',
    siteName: 'Artlist',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Artlist - AI Image Generator",
    description: "Turn photos into art with AI.",
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <WebSiteSchema />
        <ProductSchema />
        {children}
      </body>
    </html>
  );
}
