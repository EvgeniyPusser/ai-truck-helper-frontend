import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Box, Container, Flex } from "@chakra-ui/react";

import { HeroSection } from "./components/HeroSection";
import { QuoteForm } from "./components/QuoteForm";
import { ResultPanel } from "./components/ResultPanel";

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

  const mutation = useMutation({
    mutationFn: fetchMovePlan,
    onMutate: () => {
      setLoading(true);
      setResult(null);
    },
    onSuccess: (data) => {
      setResult(data);
    },
    onError: (error: any) => {
      alert("Error: " + (error.message || "Unknown error"));
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate(formData);
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
