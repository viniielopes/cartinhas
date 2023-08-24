"use client";
import TanStackProvider from "@/api/tanstack-query";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <TanStackProvider>
      <ThemeProvider attribute="data-mode">{children}</ThemeProvider>;
    </TanStackProvider>
  );
};

export default Providers;
