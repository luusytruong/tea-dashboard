import { BlogDetail } from "@/components/features";
import { Modal } from "@/components/ui";

export default async function BlogDetailModal({ params }) {
  const { id } = await params;
  return (
    <Modal>
      <BlogDetail id={id} />
    </Modal>
  );
}
