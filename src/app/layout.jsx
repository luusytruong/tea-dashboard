import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/layout/Sidebar";
import Header from "@/component/layout/Header";
import { SidebarProvider } from "@/context/SidebarContext";
import ProgressBar from "@/component/ui/ProgressBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Bảng điều khiển Chè Thái",
//   description: "Quản lý bán hàng trực tuyến",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} antialiased bg-white text-black dark:bg-[#1f2023] dark:text-white`}
      >
        <SpeedInsights />
        <SidebarProvider>
          <div className="h-svh flex relative">
            <ProgressBar />
            <Sidebar />
            <div className="bg-gray-100 dark:bg-[#1f2023] w-full flex flex-col flex-1 md:pl-14">
              <Header />
              <main className="overflow-y-auto h-full">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
