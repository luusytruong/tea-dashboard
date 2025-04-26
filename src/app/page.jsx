export const dynamic = "force-dynamic";

import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "avatar",
    label: "",
    img: true,
  },
  {
    key: "full_name",
    label: "Full name",
    mobile: true,
  },
  {
    key: "role",
    label: "Role",
    mark: true,
    mobile: true,
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "created_at",
    label: "Created",
    date: true,
  },
  {
    action: true,
    mobile: true,
  },
];

const Home = async () => {
  const data = await fetchGet("user/list");
  return (
    <Main
      title={"Customers"}
      desc={"Maganer customers and view details."}
      data={data}
      columns={columns}
    />
  );
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

export default Home;
