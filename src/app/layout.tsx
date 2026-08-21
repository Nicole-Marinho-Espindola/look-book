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
        <div className="container flex min-h-screen w-full">
          <Sidebar />
          <div className="min-w-0 flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
