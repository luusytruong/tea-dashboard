export const dynamic = "force-dynamic";

import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "image",
    img: true,
  },
  {
    key: "name",
    label: "Name",
    mobile: true,
  },
  {
    key: "price",
    label: "Price",
    price: true,
  },
  {
    key: "stock",
    label: "Stock",
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

const ProductPage = async () => {
  const data = await fetchGet("product/list");
  return (
    <Main
      title={"Products"}
      desc={"Maganer products and view details."}
      columns={columns}
      data={data}
    />
  );
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái - Sản phẩm",
    description: "Cập nhật Sản phẩm cho Chè Thái",
    alternates: { canonical: "https://luusytruong.xyz/products" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Sản phẩm",
      description: "Cập nhật Sản phẩm cho Chè Thái",
      url: "https://luusytruong.xyz/products",
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
      title: "Bảng điều khiển Chè Thái - Sản phẩm",
      description: "Cập nhật Sản phẩm cho Chè Thái",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default ProductPage;
