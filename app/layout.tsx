import type { Metadata } from "next";
import "@/style/globals.css";
import localFont from "next/font/local";
import Head from "next/head";

const pretandard = localFont({
  src: "../public/fonts/PretendardGOVVariable.woff2",
});

export const metadata: Metadata = {
  title: "linkive",
  description: "linkive test server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ko" className={pretandard.className}>
        <body>{children}</body>
      </html>
    </>
  );
}
