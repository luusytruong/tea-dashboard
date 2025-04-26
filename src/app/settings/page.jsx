export const dynamic = "force-dynamic";

import Setting from "@/component/ui/Setting";
import { fetchGet } from "@/utils/fetch";
import Script from "next/script";

const SettingPage = async () => {
  const data = await fetchGet("company/info");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bảng điều khiển Chè Thái - Cài đặt",
    description: "Cập nhật cài đặt cho Chè Thái",
    url: "https://luusytruong.xyz/settings",
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="p-4 md:p-6 flex flex-col">
        <h1 className="text-2xl font-bold">Setting</h1>
        <p className="opacity-60 my-2">Setting information for site.</p>
        <Setting data={data} />
      </div>
    </>
  );
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái - Cài đặt",
    description: "Cập nhật cài đặt cho Chè Thái",
    alternates: { canonical: "https://luusytruong.xyz/settings" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Cài đặt",
      description: "Cập nhật cài đặt cho Chè Thái",
      url: "https://luusytruong.xyz/settings",
      siteName: "Chè Thái",
      images: [
        {
          url: "https://luusytruong.xyz/banner.webp",
          width: 1200,
          height: 630,
          alt: "Chè Thái Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bảng điều khiển Chè Thái - Cài đặt",
      description: "Cập nhật cài đặt cho Chè Thái",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default SettingPage;
