// src/pages/Home.tsx
import React from "react";
import { Flex, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

import { MoveForm } from "../components/Form/MoveForm";
import { ResultPanel } from "../components/ResultPanel";
import MapView from "../components/Map/MapView";
import { useMoveStore } from "../store/useMoveStore";
import { fetchMovePlan } from "../api/chat";

export default function Home() {
  const formData = useMoveStore((state) => state.formData);
  const setFormData = useMoveStore((state) => state.setFormData);
  const result = useMoveStore((state) => state.result);
  const setResult = useMoveStore((state) => state.setResult);
  const loading = useMoveStore((state) => state.loading);
  const setLoading = useMoveStore((state) => state.setLoading);
  const reset = useMoveStore((state) => state.reset);

  const bgColor = useColorModeValue("blue.50", "gray.800"); // light bg
  const headingColor = useColorModeValue("gray.800", "orange.300");
  const textColor = useColorModeValue("gray.600", "gray.400");

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const target = e.target;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;
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

  return (
    <Box bg={bgColor} minH="100vh" py={12} px={{ base: 4, md: 10 }}>
      <Box maxW="7xl" mx="auto">
        <Heading
          mb={8}
          color={headingColor}
          textAlign={{ base: "center", md: "left" }}
        >
          Plan Your Magical Move
        </Heading>
        <Text
          mb={10}
          fontSize="lg"
          color={textColor}
          textAlign={{ base: "center", md: "left" }}
        >
          Use our AI-powered assistant to plan your move with rituals, helpers,
          and memory trails.
        </Text>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          justify="center"
        >
          <Box flex="1" maxW={{ base: "100%", md: "480px" }}>
            <MoveForm
              formData={formData}
              onChange={handleChange}
              onVolumeChange={handleVolumeChange}
              onSubmit={handleSubmit}
              loading={loading}
            />
            {result && <ResultPanel result={result} onReset={reset} />}
          </Box>

          <Box
            flex="1"
            maxW={{ base: "100%", md: "600px" }}
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
          >
            <MapView />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
