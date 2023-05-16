import Link from "next/link";

const BotSection = () => {
  return (
    <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-6xl text-6xl mb-4 font-bold text-gradient">
          AI ChatBot
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray. Copper mug try-hard pitchfork pour-over freegan
        </p>
        <div className="flex justify-center">
          <Link
            href="/chatbot"
            className="inline-flex text-white  bg-green-500 rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-green-700 text-lg"
          >
            Let's Start
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-[60%] w-[90%]">
        <img
          src="/bt.png"
          className="object-cover object-center rounded"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default BotSection;
