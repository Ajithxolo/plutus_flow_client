// src/app/layout.js
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SaasProvider } from "@saas-ui/react";
import "../styles/globals.css";

// Create a client instance (you can later move this to a separate file)
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SaasProvider>
            {children}         
          </SaasProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
