"use client";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const toolbarItems = [
  { label: "B", syntax: "**", placeholder: "bold text" },
  { label: "I", syntax: "*", placeholder: "italic text" },
  { label: "H1", syntax: "# ", placeholder: "Heading" },
  { label: "Link", syntax: ["[", "](url)"], placeholder: "text" },
  { label: "Image", syntax: ["![", "](url)"], placeholder: "alt" },
  { label: "Code", syntax: "`", placeholder: "code" },
  { label: "Quote", syntax: "> ", placeholder: "quote" },
  { label: "UL", syntax: "- ", placeholder: "list item" },
];

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const textareaRef = useRef(null);

  const insertSyntax = (item) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const { selectionStart, selectionEnd, value } = ta;
    let newValue = "";

    if (Array.isArray(item.syntax)) {
      const [start, end] = item.syntax;
      newValue =
        value.slice(0, selectionStart) +
        start +
        (selectionStart !== selectionEnd
          ? value.slice(selectionStart, selectionEnd)
          : item.placeholder) +
        end +
        value.slice(selectionEnd);
    } else {
      newValue =
        value.slice(0, selectionStart) +
        item.syntax +
        (selectionStart !== selectionEnd
          ? value.slice(selectionStart, selectionEnd)
          : item.placeholder) +
        item.syntax +
        value.slice(selectionEnd);
    }

    setMarkdown(newValue);

    setTimeout(() => {
      const pos =
        selectionStart +
        (Array.isArray(item.syntax)
          ? item.syntax[0].length
          : item.syntax.length);
      ta.focus();
      ta.setSelectionRange(
        pos,
        pos +
          (selectionStart !== selectionEnd
            ? selectionEnd - selectionStart
            : item.placeholder.length)
      );
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Toolbar */}
        <div className="flex gap-2 mb-2">
          {toolbarItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="px-2 py-1 border rounded"
              onClick={() => insertSyntax(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Editor */}
        <textarea
          ref={textareaRef}
          className="w-full h-64 p-3 border rounded-lg focus:outline-none focus:ring"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Nhập Markdown tại đây..."
        />
      </div>

      {/* Preview */}
      <div className="w-full md:w-1/2 h-64 p-3 border rounded-lg overflow-y-auto prose prose-sm">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
