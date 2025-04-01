'use client';

import LoginWithGoogle from "@/components/LoginWithGoogle";
import UserLogin from "@/components/UserLogin";

export default function Page() {
  return (
    <>
      <UserLogin />
      <LoginWithGoogle />
    </>
  );
}
