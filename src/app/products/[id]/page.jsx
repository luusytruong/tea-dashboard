import { ProductDetail } from "@/components/features";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Product Page {id}</h1>
      <ProductDetail id={id} />
    </div>
  );
}
