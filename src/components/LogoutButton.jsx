'use client'
import React, {useState} from "react";
import { Alert, MenuItem, Link as ChakraLink } from "@chakra-ui/react";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleLogout = async () => {

    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      setMessage("Logged out successfully!");
      router.push("/login");
    }
  }

  return (
    <MenuItem>
      {error && <Alert status="error" title={error} />}
      {message && <Alert status="success" title={message} />}
      <ChakraLink onClick={handleLogout}>
        Logout
      </ChakraLink>
    </MenuItem>
  );
};

export default LogoutButton;