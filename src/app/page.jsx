const HomePage = async () => {
  return <div>Overview page</div>;
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái",
    description: "Tổng quan Chè Thái, hiệu suất, kinh doanh",
    alternates: { canonical: "https://luusytruong.xyz" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Khách hàng",
      description: "Tổng quan Chè Thái, hiệu suất, kinh doanh",
      url: "https://luusytruong.xyz",
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
      title: "Bảng điều khiển Chè Thái",
      description: "Tổng quan Chè Thái, hiệu suất, kinh doanh",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default HomePage;
