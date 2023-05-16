"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const imageGenaration = async (form) => {
  if (form.prompt) {
    try {
      const response = await fetch(`${process.env.API_URL}/dalle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: form.prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return error;
    }
  } else {
    alert("Input Fields are Required");
  }
};

const sharePost = async (form) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

export const metadata = {
  title: "Genetrate Image",
  description: "Genetrate Image",
};

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const image_mutation = useMutation({
    mutationFn: () => {
      return imageGenaration(form);
    },
    onSuccess: (data) =>
      setForm({ ...form, photo: `data:image/jpeg;base64,${data.img}` }),
    onError: (error) => alert("Input fields are Required"),
  });

  const post_mutation = useMutation({
    mutationFn: () => {
      return sharePost(form);
    },
    onSuccess: (data) => router.push("/gallery"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    post_mutation.mutate();
  };

  return (
    <section className="max-w-7xl mt-4 mx-auto">
      <div>
        <h1 className="font-extrabold text-[52px] text-center text-gradient">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] text-center max-w-7xl px-8">
          Generate an imaginative image through{" "}
          <span className="font-bold text-gradient">DALL-E AI</span> and share
          it with the community
        </p>
      </div>
      <div className="md:max-w-[80%] max-w-[100%] p-5 mx-auto my-5">
        <form
          className="flex flex-col justify-center max-w-2xl mx-auto p-5"
          onSubmit={handleSubmit}
        >
          <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[30%] h-[70%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label className="block text-[20px] font-medium  text-blue-400">
                Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 z-[1] text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block p-3"
                type="text"
                name="name"
                placeholder="Ex., john doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="block text-[20px] font-medium  text-blue-400">
                Prompt
              </label>
              <input
                className="bg-gray-50 z-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full h-[60px] p-3 z-[10]"
                type="text"
                name="prompt"
                placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                value={form.prompt}
                onChange={handleChange}
                // isSurpriseMe
                // handleSurpriseMe={handleSurpriseMe}
              />
            </div>
            <div className="relative bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 md:w-72 w-auto mt-4 p-3 h-64 flex justify-center items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src="/ai.png"
                  alt="preview"
                  width={150}
                  height={150}
                  className="w-[80%] h-[80%] object-contain opacity-40"
                />
              )}

              {/* {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Image s />
                </div>
              )} */}
            </div>
          </div>

          <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={() => image_mutation.mutate()}
              className="text-white bg-sky-500 hover:bg-sky-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              disabled={image_mutation.isLoading ? true : false}
            >
              {image_mutation.isLoading ? "Generating..." : "Generate"}
            </button>
          </div>

          <div className="mt-8">
            <p className="my-2 text-yellow-200 text-[14px]">
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <button
              type="submit"
              className="mt-3 bg-white hover:bg-gray-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              disabled={post_mutation.isLoading ? true : false}
            >
              {post_mutation.isLoading
                ? "Sharing..."
                : "Share with the Community"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
