import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ProgressBar from "@/components/ui/ProgressBar";
import { Toaster } from "react-hot-toast";
import ClientContext from "@/context/ClientContext";
import { Dialog } from "@/components/common";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1f2023"
        />
      </head>
      <body
        className={`${sourceSerif.variable} antialiased bg-gray-100 text-black dark:bg-[#1f2023] dark:text-white`}
      >
        <Toaster
          position="bottom-left"
          gutter={16}
          toastOptions={{ duration: 6000 }}
        />
        <Dialog />
        <ClientContext>
          <div className="min-h-svh flex relative">
            <ProgressBar />
            <Sidebar />
            <div className="w-full flex flex-col flex-1 md:pl-14">
              {modal}
              <Header />
              <main className="mt-[73px] h-full">{children}</main>
            </div>
          </div>
        </ClientContext>
      </body>
    </html>
  );
}
