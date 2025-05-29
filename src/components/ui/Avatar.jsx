import Image from "next/image";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const Avatar = ({
  fullName = "",
  imageUrl = "",
  square = false,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-200 flex shrink-0 overflow-hidden ${
        square ? "rounded-md" : "rounded-full"
      } ${className} aspect-square h-10`}
    >
      {imageUrl ? (
        <Image
          priority
          width={96}
          height={96}
          src={IMG_URL + imageUrl}
          alt={fullName}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex w-full h-full items-center justify-center text-gray-600 text-xl font-bold">
          {fullName.charAt(0).toUpperCase() || "T"}
        </div>
      )}
    </div>
  );
};

export default Avatar;
