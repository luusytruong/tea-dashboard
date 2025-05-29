import { OrderDetail } from "@/components/features";
import Modal from "@/components/ui/Modal";

export default async function OrderDetailModal({ params }) {
  const { id } = await params;
  return (
    <Modal>
      <OrderDetail id={id} />
    </Modal>
  );
}
