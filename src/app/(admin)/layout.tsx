import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import ".../globals.scss";
import "../globals.scss";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: "Admin",
    description: "This is Admin page",
    icons: {
        icon: {
          url: "/Favicon.ico",
          type: "image/png",
        },
        shortcut: { url: "/Favicon.ico", type: "image/png" },
      },
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="w-full h-screen flex flex-col">
                    {children}
                </main>
            </body>
        </html>
    );
}