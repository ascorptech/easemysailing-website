

import React, { lazy, Suspense, useState } from "react";
// import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "../globals.scss";
// import RecruiterHeader from "@/components/recruiter/RecruiterHeader/RecruiterHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

// export const metadata: Metadata = {
//     title: "Recruiter",
//     description: "This is recruiter page",
// };


export default function RecruiterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
