"use client";

const Switch = ({ isChecked, setIsChecked }) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center justify-end">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`h-6 w-11 rounded-full transition shadow-inner ${
              isChecked ? "bg-[#00a63e]" : "bg-gray-300 dark:bg-[#36383b]"
            }`}
          />
          <div
            className={`absolute left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition transform ${
              isChecked ? "translate-x-5" : ""
            }`}
          />
        </div>
      </label>
    </>
  );
};

export default Switch;
