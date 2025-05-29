"use client";

import { cn } from "@/lib/formatter";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      className,
      inputClassName,
      error,
      hint,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    const isTextarea = type === "textarea";

    return (
      <div className={cn("w-full flex flex-col gap-1", className)}>
        {label && <label className="font-medium opacity-60">{label}</label>}

        <div className="relative flex">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center opacity-60 pointer-events-none">
              {startIcon}
            </div>
          )}

          {isTextarea ? (
            <textarea
              ref={ref}
              className={cn(
                "w-full rounded-lg border bg-transparent border-gray-200 dark:border-[#fcfcfc1f] p-2 min-h-24",
                startIcon && "pl-10",
                endIcon && "pr-10",
                inputClassName
              )}
              {...props}
            />
          ) : (
            <input
              ref={ref}
              type={type}
              className={cn(
                "w-full rounded-lg border bg-transparent border-gray-200 dark:border-[#fcfcfc1f] h-12",
                startIcon && "pl-10",
                endIcon && "pr-10",
                inputClassName
              )}
              {...props}
            />
          )}

          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center opacity-60 pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>

        {hint && !error && (
          <span className="text-xs text-gray-400">{hint}</span>
        )}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
