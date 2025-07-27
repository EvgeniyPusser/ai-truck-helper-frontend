// src/App.tsx
import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

import { Navbar } from "./components/common/Navbar"; // ✅ Chakra-styled top bar
import { MoveForm } from "./components/Form/MoveForm"; // ✅ Form component
import { ResultPanel } from "./components/ResultPanel"; // ✅ Result display

import { useMoveStore } from "./store/useMoveStore";
import { fetchMovePlan } from "./api/chat";

function App() {
  const formData = useMoveStore((state) => state.formData);
  const setFormData = useMoveStore((state) => state.setFormData);
  const result = useMoveStore((state) => state.result);
  const setResult = useMoveStore((state) => state.setResult);
  const loading = useMoveStore((state) => state.loading);
  const setLoading = useMoveStore((state) => state.setLoading);
  const reset = useMoveStore((state) => state.reset);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value, type, checked } = e.target;
    setFormData({ [name]: type === "checkbox" ? checked : value });
  }

  function handleVolumeChange(value: string) {
    setFormData({ volume: Number(value) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const data = await fetchMovePlan(formData);
      setResult(data);
    } catch (err: any) {
      alert("Error: " + (err.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    reset();
  }

  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar /> {/* Top navigation */}
      <Container maxW="6xl" py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          justify="center"
        >
          <MoveForm
            formData={formData}
            onChange={handleChange}
            onVolumeChange={handleVolumeChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
          {result && <ResultPanel result={result} onReset={handleReset} />}
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
