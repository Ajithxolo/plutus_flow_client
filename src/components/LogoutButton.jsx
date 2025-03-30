'use client'
import React, {useState, useEffect} from "react";
import { Box, Button, Alert } from "@chakra-ui/react";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: {user} } = await supabase.auth.getUser();
      setUser(user);
      console.log("User:", user);
      if (!user) {
        setError("No user found. Please log in.");
      }
    }
    checkUser();
  }
  , []);

  const handleLogout = async () => {

    const { error } = await supabase.auth.signOut();
    if (error) {
      setError(error.message);
    } else {
      setMessage("Logged out successfully!");
      setUser(null);
      router.push("/login");
    }
  }
  if (!user) return null; 

  return (
    <Box>
      {error && <Alert status="error" title={error} />}
      {message && <Alert status="success" title={message} />}
      {user && (
        <Button variant="solid" colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default LogoutButton;