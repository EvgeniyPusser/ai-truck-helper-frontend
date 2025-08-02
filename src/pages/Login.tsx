import React, { useState } from "react";
import { Box, Input, Button, Heading, VStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useUserStore } from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
   try {
     console.log("👉 Sending:", email, password); // 💡 лог перед отправкой

     const response = await axios.post("http://localhost:3001/api/auth/login", {
       email,
       password,
     });

     console.log("✅ Response:", response.data); // 💡 лог ответа

     const { token, user } = response.data;

     localStorage.setItem("token", token);
     setUser(user);
     navigate("/dashboard");
   } catch (err) {
     console.error("❌ Login error:", err); // 💡 лог ошибки
     setError("Invalid credentials");
   }
 };


  return (
    <Box maxW="md" mx="auto" mt={12} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Login</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Box>
  );
};

export default Login;
