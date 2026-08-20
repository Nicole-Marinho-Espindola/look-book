import React from "react";
import "./globals.css";
import Navbar from "@/shared/components/header/navbar";
import Sidebar from "@/shared/components/header/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex container">
          <Sidebar />
          <div className="">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}