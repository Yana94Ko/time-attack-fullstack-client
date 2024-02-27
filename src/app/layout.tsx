import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "중고마켓",
  description: "time-attack-fullstack-client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
