import Main from "@/component/layout/Main";
import { fetchGet } from "@/utils/fetch";

const columns = [
  {
    key: "image",
    img: true,
  },
  {
    key: "title",
    label: "Title",
    mobile: true,
  },
  {
    key: "category",
    label: "Category",
    mobile: true,
    mark: true,
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

const BlogPage = async () => {
  const data = await fetchGet("blog/list");
  return (
    <Main
      title={"Blog"}
      desc={"Maganer blog and view details."}
      data={data}
      columns={columns}
    />
  );
};

export async function generateMetadata() {
  return {
    title: "Bảng điều khiển Chè Thái - Blog",
    description: "Cập nhật Blog cho Chè Thái",
    alternates: { canonical: "https://luusytruong.xyz/blog" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Bảng điều khiển Chè Thái - Blog",
      description: "Cập nhật Blog cho Chè Thái",
      url: "https://luusytruong.xyz/blog",
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
      title: "Bảng điều khiển Chè Thái - Blog",
      description: "Cập nhật Blog cho Chè Thái",
      images: ["https://luusytruong.xyz/banner.webp"],
    },
  };
}

export default BlogPage;
