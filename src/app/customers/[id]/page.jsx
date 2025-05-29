import { CustomerDetail } from "@/components/features";

export default async function CustomerDetailPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Customer Page {id}</h1>
      <CustomerDetail id={id} />
    </div>
  );
}
