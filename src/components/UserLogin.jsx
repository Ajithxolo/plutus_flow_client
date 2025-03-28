// src/components/UserLogin.js
"use client";
import { useState } from 'react';
import supabase from '@/lib/supabaseClient';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Signed in successfully!');
      // The JWT is available in data.session.access_token
      console.log("JWT token:", data.session?.access_token);
      // Store the token (e.g., in localStorage) and include it in subsequent GraphQL requests.
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mb={2} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={2} />
      <Button onClick={handleSignIn}>Sign In</Button>
      {message && <Text mt={2}>{message}</Text>}
    </Box>
  );
};

export default UserLogin;
