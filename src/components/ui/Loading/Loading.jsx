"use client";

const Loading = () => {
  return (
    <div className="absolute z-[100] inset-0 flex items-center justify-center">
      <span className="w-8 h-8 border-3 border-green-700 border-t-transparent rounded-full inline-block animate-spin"></span>
    </div>
  );
};

export default Loading;
