'use client';
import EmailConfirmationHandler from "@/components/EmailConfirmationHandler";
import ExpensesList from "@/components/ExpensesList";
import { Box } from "@chakra-ui/react";
import AuthGuard from "@/components/AuthGuard";
import TopNavBar from "@/components/TopNavBar";

export default function Home() {
  return (
    <AuthGuard>
    <TopNavBar />
    <Box>
      <EmailConfirmationHandler />
      <ExpensesList />
    </Box>
    </AuthGuard>
  );
}
