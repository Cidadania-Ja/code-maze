"use client";

import { ReactQueryClient } from "@/lib/configuration/react-query.configuration";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <QueryClientProvider client={ReactQueryClient}>
        {children}
      </QueryClientProvider>

      <ToastContainer hideProgressBar closeButton={false} />
    </AppContext.Provider>
  );
}

export const useAppProvider = () => useContext(AppContext);
