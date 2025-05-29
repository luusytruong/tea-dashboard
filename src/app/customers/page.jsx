import { CustomerList } from "@/components/features";

const CustomersPage = () => {
  return <CustomerList />;
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái - Khách hàng",
    description: "Cập nhật Khách hàng cho Chè Thái",
    alternates: { canonical: "https://luusytruong.xyz" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Khách hàng",
      description: "Cập nhật Khách hàng cho Chè Thái",
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
      title: "Bảng điều khiển Chè Thái - Khách hàng",
      description: "Cập nhật Khách hàng cho Chè Thái",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default CustomersPage;
