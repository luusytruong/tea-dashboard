"use client";

import { CircleX, Save, Trash } from "lucide-react";
import React from "react";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

const Detail = ({
  title,
  desc,
  onSave,
  onDelete,
  showClose = false,
  children,
  ...props
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="bg-white dark:bg-[#27282b] flex-1 flex flex-col p-4 md:p-6 rounded-lg border border-gray-200 dark:border-[#fcfcfc1f]">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
            <p className="opacity-60 my-2">{desc}</p>
          </div>
          <div className="relative flex gap-2 md:gap-4">
            <Button
              icon={<Save size={16} strokeWidth={1} />}
              title={"Save"}
              isActive={false}
              className={
                "relative z-10 hover:bg-green-700 hover:border-green-700 hover:text-white"
              }
              onClick={onSave}
            />
            <Button
              icon={<Trash size={16} strokeWidth={1} />}
              title={"Delete"}
              isActive={false}
              className={
                "relative z-10 hover:bg-black hover:border-black hover:text-white"
              }
              onClick={onDelete}
            />
            {showClose && (
              <Button
                icon={<CircleX size={16} strokeWidth={1} />}
                isActive={false}
                className={
                  "relative z-10 hover:bg-black hover:border-black hover:text-white"
                }
                onClick={() => router.back()}
              />
            )}
          </div>
        </div>
        <div className={`mt-6 ${props.classChildren}`}>{children}</div>
      </div>
    </div>
  );
};

export default Detail;
