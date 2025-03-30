'use client';
import EmailConfirmationHandler from "@/components/EmailConfirmationHandler";
import ExpensesList from "@/components/ExpensesList";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";

export default function Home() {
  return (
    <Box>
      <LogoutButton />
      <EmailConfirmationHandler />
      <ExpensesList />
    </Box>
  );
}
