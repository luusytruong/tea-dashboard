import { OrderList } from "@/components/features";

const OrdersPage = async () => {
  return <OrderList />;
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái - Đơn hàng",
    description: "Cập nhật Đơn hàng cho Chè Thái",
    alternates: { canonical: "https://luusytruong.xyz/orders" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Đơn hàng",
      description: "Cập nhật Đơn hàng cho Chè Thái",
      url: "https://luusytruong.xyz/orders",
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
      title: "Bảng điều khiển Chè Thái - Đơn hàng",
      description: "Cập nhật Đơn hàng cho Chè Thái",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default OrdersPage;
