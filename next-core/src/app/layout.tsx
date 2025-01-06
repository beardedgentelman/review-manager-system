import type {Metadata} from "next";
import {ReactNode} from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewList Management System",
  description: "ReviewList Management System App",
};

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`antialiased relative flex flex-col items-center md:min-h-screen md:h-screen md:max-h-screen overflow-y-auto`}
      >
      {children}
      </body>
      </html>
  );
}
