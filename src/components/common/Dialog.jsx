"use client";

import { useEffect, useState } from "react";
import { dialog } from "@/lib/dialog";

const className =
  "px-4 py-2 rounded-lg cursor-pointer h-10 bg-white dark:bg-[#27282b] border border-gray-200 dark:border-[#fcfcfc1f] transition-all duration-100 hover:scale-105 active:scale-90";

export default function Dialog() {
  const [dialogState, setDialogState] = useState(null);

  useEffect(() => {
    dialog.register((data) => {
      setDialogState(data);
    });
  }, []);

  const handleOk = () => {
    dialogState?.resolve(1);
    setDialogState(null);
  };

  const handleCancel = () => {
    dialogState?.resolve(0);
    setDialogState(null);
  };

  if (!dialogState) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20">
      <div className="bg-white dark:bg-[#27282b] rounded-lg p-4 border border-gray-200 dark:border-[#fcfcfc1f]">
        <p className="mb-6">{dialogState.message}</p>
        <div className="flex justify-end gap-4">
          <button
            autoFocus
            onClick={handleCancel}
            className={`${className} hover:text-white hover:bg-green-700`}
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className={`${className} hover:text-white hover:bg-black`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
