import type { Metadata } from "next";
import "@/style/globals.css";
import localFont from "next/font/local";
import Head from "next/head";
import AuthSession from "./AuthSession";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ReactQueryProviders from "@/lib/react-query-provider";
import React from "react";

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
        <body>
          <ReactQueryProviders>
            <AuthSession>{children}</AuthSession>
          </ReactQueryProviders>

          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
