import { OrderDetail } from "@/components/features";

export default async function OrderDetailPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Order Page {id}</h1>
      <OrderDetail id={id} />
    </div>
  );
}
