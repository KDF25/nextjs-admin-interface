import { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import "./styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Manage translation services.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || ""),
  openGraph: {
    title: "Admin Panel",
    description:
      "Manage projects, users, and orders with the admin panel. Efficient tools for optimizing operations.",
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin`,
    siteName: "Admin Panel",
    images: [
      {
        url: "/logoOG.png",
        width: 800,
        height: 600,
        alt: "Admin Panel",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="icon" href="/logoOG.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
