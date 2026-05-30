import type { Metadata } from "next";
import {
  EB_Garamond,
  Geist_Mono,
  Inter,
  Nanum_Myeongjo,
} from "next/font/google";
import { Providers } from "@/app/providers";
import { Footer, Header, ScrollToTopButton } from "@/components/layout";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "@/styles/globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://casa-politica-intelligence.vercel.app";
const sharedImage = "/images/casapolitica.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Casa Politica Intelligence | AI Political Data Infrastructure",
  description:
    "We do not poll public opinion. Casa Politica Intelligence decodes the flow of power with a real-time AI public sentiment engine.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Casa Politica Intelligence | AI Political Data Infrastructure",
    description:
      "We do not poll public opinion. We decode the flow of power with real-time political data intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "Casa Politica Intelligence",
    images: [
      {
        url: sharedImage,
        width: 1024,
        height: 1024,
        alt: "Casa Politica Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Politica Intelligence | AI Political Data Infrastructure",
    description:
      "A real-time AI public sentiment engine for political strategy.",
    images: [sharedImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${nanumMyeongjo.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
