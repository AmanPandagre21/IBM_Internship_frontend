"use client";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default layout;
