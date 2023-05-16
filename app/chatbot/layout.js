"use client";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export const metadata = {
  title: "Chat Bot",
  description: "Chat Bot Page",
};

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default layout;
