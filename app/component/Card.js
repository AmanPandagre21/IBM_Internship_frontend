"use client";
import Image from "next/image";
import { FiDownloadCloud } from "react-icons/fi";
import FileSaver from "file-saver";

const Card = ({ post }) => {
  const downloadImage = async (_id, photo) => {
    await FileSaver.saveAs(photo, `download-${_id}.jpg`);
  };

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover bg-gradient-to-b from-gray-900 via-red-900 to-red-600 m-2 overflow-hidden card ">
      <Image
        src={post && post.photo}
        className="w-full h-auto object-cover transition-all duration-500 ease-in-out transform hover:scale-150 rounded-[10%]"
        alt={post && post.prompt}
        width={220}
        height={220}
      />
      <div className="group-hover:flex flex-col max-h-94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        {/* <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p> */}
        <p className="text-white text-sm overflow-y-auto prompt">
          {post && post.prompt}
        </p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold"></div>
            <p className="text-white text-sm">{post && post.name}</p>
          </div>
          <FiDownloadCloud
            onClick={() => downloadImage(post._id, post.photo)}
            className=" animate-bounce w-6 h-6 object-contain invert cursor-pointer"
          ></FiDownloadCloud>
        </div>
      </div>
    </div>
  );
};

export default Card;
