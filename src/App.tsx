import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

import { HeroSection } from "./components/HeroSection";
import { QuoteForm } from "./components/QuoteForm";
import { ResultPanel } from "./components/ResultPanel";

import { useMoveStore } from "./store/useMoveStore";

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
    const target = e.target;

    if (target instanceof HTMLInputElement) {
      const { name, value, type, checked } = target;
      setFormData({ [name]: type === "checkbox" ? checked : value });
    } else if (target instanceof HTMLSelectElement) {
      const { name, value } = target;
      setFormData({ [name]: value });
    }
  }

  function handleVolumeChange(value: string) {
    setFormData({ volume: Number(value) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: JSON.stringify(formData) }),
      });

      const data = await response.json();
      setResult(data.reply);
    } catch (err) {
      alert("Error: " + (err instanceof Error ? err.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    reset();
  }

  return (
    <Box minH="100vh" bg="gray.50" py={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <HeroSection />

          <QuoteForm
            formData={formData}
            onChange={handleChange}
            onVolumeChange={handleVolumeChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </Flex>

        {result && <ResultPanel result={result} onReset={handleReset} />}
      </Container>
    </Box>
  );
}

export default App;
