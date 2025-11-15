import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sainiamit.com";
const profileName = "Amit Saini";
const pageTitle = "Amit Saini | Full-Stack Developer";
const pageDescription =
  "Full-stack Next.js developer crafting performant, user-centric web experiences with React, TypeScript, and modern tooling.";
const contactPhone = "+91 95211 53320";
const contactEmail = "amitsainiwork9@gmail.com";
const contactLocation = "Jaipur, Rajasthan, India";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | Amit Saini Portfolio",
  },
  description: pageDescription,
  applicationName: "Amit Saini Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Amit Saini",
    "Amit Kumar Saini",
    "Amit Saini Portfolio",
    "Sainiamit",
    "Amit Saini Full Stack Developer",
    "Amit Saini Next.js Developer",
    "Amit Saini React Developer",
    "Amit Saini TypeScript",
    "Amit Saini MERN Stack",
    "Amit Saini Web Developer",
    "Amit Saini UI Engineer",
    "Amit Saini Software Engineer",
    "Amit Saini Freelancer",
    "Amit Saini Frontend Developer",
    "Jaipur Full Stack Developer",
    "Rajasthan Software Engineer",
    "India Next.js Specialist",
  ],
  authors: [{ name: profileName, url: "https://www.linkedin.com/in/amitsaini9086" }],
  creator: profileName,
  publisher: profileName,
  category: "technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: "Amit Saini Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/Photo.png`,
        width: 1200,
        height: 630,
        alt: "Amit Saini - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@amitsaini9086",
    images: [`${siteUrl}/Photo.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/facivon.ico" },
      { url: "/Logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/Logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/facivon.ico"],
  },
  other: {
    "profile:first_name": "Amit",
    "profile:last_name": "Saini",
    "profile:username": "amitsaini-9",
    "contact:phone_number": contactPhone,
    "contact:email": contactEmail,
    "contact:address": contactLocation,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakarta.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
