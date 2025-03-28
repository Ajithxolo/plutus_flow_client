// src/components/Signup.js
"use client";
import { useState } from "react";
import supabase from "@/lib/supabaseClient";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setMessage("Signup successful! Please check your email to confirm your account.");
    }
    setLoading(false);
  };

  return (
    <Box maxW="400px" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb="6" textAlign="center">
        Sign Up
      </Heading>
      {error && (
        <Alert status="error" mb="4">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {message && (
        <Alert status="success" mb="4">
          <AlertIcon />
          {message}
        </Alert>
      )}
      <form onSubmit={handleSignup}>
        <FormControl id="email" isRequired mb="4">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
          />
        </FormControl>
        <FormControl id="password" isRequired mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button colorScheme="blue" width="full" type="submit" isLoading={loading}>
          Sign Up
        </Button>
      </form>
      <Text fontSize="sm" mt="4" textAlign="center">
        Already have an account? Log in instead.
      </Text>
    </Box>
  );
}
