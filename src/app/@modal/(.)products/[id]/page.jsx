import { ProductDetail } from "@/components/features";
import Modal from "@/components/ui/Modal";

export default async function ProductDetailModal({ params }) {
  const { id } = await params;
  return (
    <Modal>
      <ProductDetail id={id} />
    </Modal>
  );
}
