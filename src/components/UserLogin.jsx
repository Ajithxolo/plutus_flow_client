// src/components/UserLogin.js
"use client";
import { useState } from 'react';
import supabase from '@/lib/supabaseClient';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Signed in successfully!');
      // The JWT is available in data.session.access_token
      console.log("JWT token:", data.session?.access_token);
      router.push('/');
    }
  };

  return (
    <Box 
      p={6} 
      borderWidth="1px" 
      borderRadius="lg" 
      boxShadow="lg" 
      maxW="sm" 
      mx="auto" 
      mt={8} 
      bg="white"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Sign In
      </Text>
      <Input 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        mb={3} 
        size="lg" 
        variant="filled" 
      />
      <Input 
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        mb={3} 
        size="lg" 
        variant="filled" 
      />
      <Button 
        onClick={handleSignIn} 
        colorScheme="blue" 
        size="lg" 
        width="full" 
        mb={3}
      >
        Sign In
      </Button>
      {message && (
        <Text mt={3} color={message.includes('successfully') ? 'green.500' : 'red.500'} textAlign="center">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default UserLogin;
