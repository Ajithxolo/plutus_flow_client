// src/app/layout.js
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SaasProvider } from "@saas-ui/react";
import "../styles/globals.css";
import { AuthProvider } from "@saas-ui/auth";
import { createAuthService } from '@saas-ui/supabase'
import supabase from "@/lib/supabaseClient";
import { useLayoutEffect } from "react";


// Create a client instance (you can later move this to a separate file)
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    const hash = window.location.hash;
    console.log("expenseList:", hash);
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // Remove '#' from hash
      const accessToken = params.get("access_token");
      if (accessToken) {
        localStorage.setItem("access_token", accessToken);

        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Plutus Flow</title>
      </head>
      <body>
        <SaasProvider>
          <AuthProvider {...createAuthService(supabase)}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </AuthProvider>
        </SaasProvider>
      </body>
    </html>
  );
}
