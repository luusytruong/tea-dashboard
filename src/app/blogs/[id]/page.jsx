import { BlogDetail } from "@/components/features";

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Blog Page {id}</h1>
      <BlogDetail id={id} />
    </div>
  );
}
