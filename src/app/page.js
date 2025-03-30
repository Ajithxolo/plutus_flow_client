'use client';
import EmailConfirmationHandler from "@/components/EmailConfirmationHandler";
import ExpensesList from "@/components/ExpensesList";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import AuthGuard from "@/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard>
    <Box>
      <LogoutButton />
      <EmailConfirmationHandler />
      <ExpensesList />
    </Box>
    </AuthGuard>
  );
}
