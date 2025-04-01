'use client';
import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { useCreateUserWithSupabaseMutation } from "@/gql_generated/index";
import { Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const EmailConfirmationHandler = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const { mutate: createUserWithSupabase } = useCreateUserWithSupabaseMutation({
    onSuccess: () => {
      setMessage("User logged in successfully!");
    },
    onError: (err) => {
      console.error("Error saving user:", err);
      setError(err.message);
    },
  });

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      // Retrieve the access token from localStorage
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) {
        setIsConfirming(true);

        try {
          // Fetch the user details using the access token
          const { data, error } = await supabase.auth.getUser(accessToken);

          if (error) {
            setError("Failed to confirm email.");
          } else {
            console.log("Access token:", accessToken);
            createUserWithSupabase({ token: accessToken });
          }
        } catch (err) {
          console.error("Error during email confirmation:", err);
          setError("An unexpected error occurred.");
        } finally {
          setIsConfirming(false);
        }
      } else {
        setError("Access token not found. Please try logging in again.");
      }
    };

    handleEmailConfirmation();
  }, [createUserWithSupabase]);

  if (isConfirming) {
    return (
      <Alert status="info">
        <AlertIcon />
        <Spinner size="sm" mr="2" />
        Confirming your email...
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  if (message) {
    return (
      <Alert status="success">
        <AlertIcon />
        {message}
      </Alert>
    );
  }

  return null;
};

export default EmailConfirmationHandler;
