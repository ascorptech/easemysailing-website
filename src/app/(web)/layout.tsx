import Head from "next/head";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.scss";
import Header from "@/components/web/header/Header";
import Footer1 from "@/components/web/footer/Footer";
import Footer from "../Shared/Footer/Footer";
import DisableRightClick from "@/components/web/disablerightclick/DisableRightClick";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: { default: "EaseMySailing", template: "%s | EaseMySailing" },
  description: "Ease My Sailing by Sea Line Group is India’s leading seafarer job portal with 3000+ maritime, offshore, and shore-based vacancies. Trusted by the Indian Shipping Fraternity, we connect seafarers with top global companies for roles on tankers, DSVs, AHTS, ROVs, and more. Submit your CV and apply today for secure, top-paying jobs at sea!",
  keywords: "Maritime Union Of India, Marine Website, Job Ships, Marine Mantra, Offshore Jobs, Shipboard Jobs, Jobs On Ships, Dredger Jobs, Marine Jobs, Cruise Ship Jobs, Sea Jobs, Shore Jobs In Shipping, Marine Crew, Maritime Crew, Indian Crews, Crewing Assistance, Merchant Navy Jobs, Merchant Marine Jobs, Rig Jobs, Sailor Job, Seamen Job, Ocean Job, Seafarer Jobs, Marex, Seajob, Sea Vessel Jobs, Marine Vacancies, Maritime Vacancies, Shipping Openings, Jobship, Seafarers Job, Marine Recruitment India, Marine Employment, Marine Careers",
  icons: {
    icon: {
      url: "/Favicon.ico",
      type: "image/png",
    },
    shortcut: { url: "/Favicon.ico", type: "image/png" },
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full h-screen flex flex-col">
          {/* {showPopup ? (
            <PinPopup closeModal={closeModal} />
          ) : ( */}
          <>
            {/* <DisableRightClick /> */}
            <ToastContainer/>
            <Header />

            {children}
            <Footer1 />
            <Footer />
          </>
          {/* )}  */}
        </main>
      </body>
    </html>
  );
}
