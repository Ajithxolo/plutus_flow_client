import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { useCreateUserWithSupabaseMutation } from "@/gql_generated/index";
import { Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const EmailConfirmationHandler = () => {
  console.log("User saved successfully");

  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const { mutate: createUserWithSupabase } = useCreateUserWithSupabaseMutation({
    onSuccess: () => {
      console.log("User saved successfully");
      setMessage("User saved successfully!");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("access_token");

      if (accessToken) {
        setIsConfirming(true);
        const { data, error } = await supabase.auth.getUser(accessToken);

        if (error) {
          setError("Failed to confirm email.");
        } else {
          console.log("Access token:", accessToken);
          createUserWithSupabase({ token: accessToken });
        }
        setIsConfirming(false);
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