// src/app/layout.js
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";

// Create a client instance (you can later move this to a separate file)
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
