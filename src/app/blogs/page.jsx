import { BlogList } from "@/components/features";

const BlogsPage = async () => {
  return <BlogList />;
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

export default BlogsPage;
