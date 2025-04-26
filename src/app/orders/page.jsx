import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "slug",
    label: "Code",
    mobile: true,
  },
  {
    key: "total_price",
    label: "Total",
    price: true,
    mobile: true,
  },
  {
    key: "status",
    label: "Status",
    mark: true,
    mobile: true,
  },
  {
    key: "created_at",
    label: "Created at",
    date: true,
  },
  {
    action: true,
    mobile: true,
  },
];

const OrderPage = async () => {
  const data = await fetchGet("order/all");
  return (
    <Main
      title={"Orders"}
      desc={"Maganer orders and view details."}
      data={data}
      columns={columns}
    />
  );
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

export default OrderPage;
