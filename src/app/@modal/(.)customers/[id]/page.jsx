import { CustomerDetail } from "@/components/features";
import Modal from "@/components/ui/Modal";

export default async function CustomerDetailModal({ params }) {
  const { id } = await params;
  return (
    <Modal>
      <CustomerDetail id={id} />
    </Modal>
  );
}
