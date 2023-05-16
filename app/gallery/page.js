import React from "react";
import Card from "../component/Card";

export const metadata = {
  title: "Gallery",
  description: "Gallery Page",
};

const getData = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/post`, {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const page = async () => {
  const data = await getData();
  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[52px] text-center text-gradient">
          Gallery
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] text-center max-w-7xl px-8">
          Generate an imaginative image through{" "}
          <span className="font-bold text-gradient">DALL-E AI</span> and share
          it with the community
        </p>
      </div>

      <div className="lg:w-[90%] w-[85%] grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 my-8 mx-auto">
        {data &&
          data.posts.map((post) => {
            return <Card key={post._id} post={post} />;
          })}
      </div>
    </section>
  );
};

export default page;
