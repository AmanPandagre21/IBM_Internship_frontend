import Image from "next/image";
import AIimageSection from "./component/AIimageSection";
import Link from "next/link";
import BotSection from "./component/BotSection";

const getImages = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/post", {
      cache: "no-store",
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    const trimData = data.posts.slice(0, 7);
    return trimData;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const page = async () => {
  const imageData = await getImages();
  return (
    <>
      <section className="flex md:flex-row flex-col sm:px-14 p-6 mb-[4%] mx-auto">
        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 md:ml-10">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-bold ss:text-[62px] text-[52px] md:text-left text-center text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white md:text-left text-center ss:leading-[100.8px] leading-[75px] w-full">
            Aartificial Intelligence
          </h1>
          <p className="font-poppins font-normal text-white md:text-left text-center text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Revolutionizing industries, enhancing experiences, and shaping the
            future of innovation.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center md:my-0 mt-10 relative">
          <Image
            src="/ultron2.png"
            alt="billing"
            width={500}
            height={500}
            className="z-[10]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>

      <section className="flex flex-col sm:px-14 p-6 my-[4%]">
        <AIimageSection data={imageData} />
      </section>

      <section className="w-full h-auto sm:px-14 p-6 my-[4%] bg-[url('/moon.svg')] bg-no-repeat">
        <div className="lg:w-[60%] mx-auto lg:mt-2">
          <h3 className="text-white md:text-[42px] text-[25px] text-center z-[1] font-bold text-gradient">
            You can also create your own Images with the help of the Dalle Ai
          </h3>
          <p className="text-center my-5 text-gray-100">
            lorem esncjbjbv ncknczjnk bkbdvkkdv bd k sdv s dvsbdv sdvsdvsd
          </p>
        </div>
        <div className="flex justify-center lg:mt-6 lg:mb-4 m-4">
          <Link
            href="/createpost"
            className="text-white py-3 px-4 bg-green-500 rounded-xl"
          >
            Generate Image
          </Link>
        </div>
      </section>

      <section className="text-gray-400 sm:px-14 p-6 my[4%]">
        <BotSection />
      </section>
    </>
  );
};

export default page;
