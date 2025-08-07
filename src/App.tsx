import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar />
      <Container maxW="6xl" py={10}>
        <Routes>
          <Route path="/" element={<Login />} /> {/* ← This loads first */}
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
