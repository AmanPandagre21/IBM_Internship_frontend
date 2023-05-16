"use client";

import React, { useState } from "react";
import ChatBody from "../component/chatsComponent/ChatBody";
import ChatInput from "../component/chatsComponent/ChatInput";
import { useMutation } from "react-query";

const page = () => {
  const [chat, setChat] = useState([]);

  const getBotResponse = async (chat) => {
    const response = await fetch(`${process.env.API_URL}/chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: chat.map((message) => message.message).join(" \n "),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim();
      return parsedData;
    }
  };

  const mutation = useMutation({
    mutationFn: () => {
      return getBotResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data?.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <section className="md:h-[85vh] h-[90vh] py-3 sm:px-16 px-12 text-white flex flex-col justify-between align-middle overflow-hidden">
      <div className="gradient-01 md:mt-[0%] mt-[60%] z-0 absolute"></div>
      <div className="gradient-02 md:mt-[10%] mt-[60%] z-0 absolute"></div>

      <h1 className="font-extrabold text-[42px] mt-[0%] text-center text-gradient">
        ChatBot
      </h1>

      <div className="h-[90%] mt-[0%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-mds">
        <ChatBody chat={chat} />
      </div>

      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </section>
  );
};

export default page;
