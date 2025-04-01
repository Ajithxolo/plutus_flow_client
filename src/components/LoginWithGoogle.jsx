'use client';
import React from "react";
import { Button, Box, Alert, AlertIcon, Text } from "@chakra-ui/react";
import { useLogin } from "@saas-ui/auth";

const LoginWithGoogle = () => {
  const [{ isLoading, data, error }, login] = useLogin()

  return (
    <Box textAlign="center" mt={8}>
      <Button colorScheme='blue' size='lg' onClick={() => login({ provider: 'google' })} isLoading={isLoading}>
        Log in with Google
      </Button>
    </Box>
  )
};

export default LoginWithGoogle;