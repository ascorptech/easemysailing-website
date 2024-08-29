import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Recruiter",
    description: "This is recruiter page",
};

export default function RecruiterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen flex flex-col">
            {children}
        </div>
        </body>
        </html>
    );
}
