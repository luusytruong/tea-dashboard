import MarkdownEditor from "@/components/ui/MarkdownEditor";

export default function MarkdownPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Markdown Editor & Preview</h1>
      <MarkdownEditor />
    </main>
  );
}
