import { ProductList } from "@/components/features";

const ProductPage = async () => {
  return <ProductList />;
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
