"use client";

import { useEffect, useState } from "react";

const AIimageSection = () => {
  const [imgdata, setImgData] = useState([]);

  const getImages = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/post`, {
        cache: "no-store",
        next: { revalidate: 60 },
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      const trimData = data.posts.slice(0, 7);

      setImgData(trimData);
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        {/* <div className="flex flex-col items-center justify-center"> */}
        <div className="flex flex-col  max-w-8xl justify-center items-center space-y-3 w-full h-auto ">
          <div className="flex flex-col md:items-start items-center justify-center space-y-3 mb-3">
            <h1 className="title-font sm:text-7xl text-6xl mb-3 font-bold text-gradient mx-auto">
              AI Gallery
            </h1>
            <p className="mb-8 text-white leading-relaxed px-3 text-center">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center">
            <div className="lg:w-40 w-64 h-40 overflow-hidden rounded-xl bshadow">
              <img
                src={imgdata[0] && imgdata[0].photo}
                alt="ai_img"
                className="lg:w-40 w-64 h-40"
              />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
              <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl bshadow">
                <img
                  src={imgdata[3] && imgdata[3].photo}
                  alt="ai_img"
                  className="w-32 lg:w-40 h-32"
                />
              </div>
              <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl bshadow">
                <img
                  src={imgdata[2] && imgdata[2].photo}
                  alt="ai_img"
                  className="w-32 lg:w-40 h-48"
                />
              </div>
            </div>
            <div className="lg:w-68 w-64 h-96  overflow-hidden rounded-xl bshadow">
              <img
                src={imgdata[1] && imgdata[1].photo}
                alt="ai_img"
                className="lg:w-68 w-64 h-96"
              />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
              <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl bshadow">
                <img
                  src={imgdata[4] && imgdata[4].photo}
                  alt="ai_img"
                  className="w-32 lg:w-40 h-48"
                />
              </div>
              <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl bshadow">
                <img
                  src={imgdata[5] && imgdata[5].photo}
                  alt="ai_img"
                  className="w-32 lg:w-40 h-32 "
                />
              </div>
            </div>
            <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl bshadow">
              <img
                src={imgdata[6] && imgdata[6].photo}
                alt="ai_img"
                className="lg:w-40 w-64 h-40"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AIimageSection;
