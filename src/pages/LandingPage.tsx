// src/pages/LandingPage.tsx
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { useState } from "react";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Background wavy band
const WavyLines = () => (
  <svg
    width="100%"
    height="180"
    viewBox="0 0 1440 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: "45%",
      left: 0,
      zIndex: 1,
      opacity: 0.1,
      transform: "translateY(-50%)",
    }}
  >
    <path
      d="M0 60 C360 120 720 0 1080 60 C1440 120 1440 0 1440 0 L1440 180 L0 180 Z"
      fill="#F97316"
    />
  </svg>
);

// Thin curved lines overlay
const CurvedLines = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 1,
      opacity: 0.07,
    }}
  >
    <path
      d="M50 150 C200 100 400 300 600 150 S950 50 1200 200"
      stroke="#F97316"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M100 450 C300 400 500 600 700 450 S1050 350 1300 500"
      stroke="#F97316"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M200 250 C400 200 600 400 800 250 S1150 150 1400 300"
      stroke="#F97316"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default function LandingPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const accent = "#F97316"; // orange
  const bgColor = "#FFFBEA"; // soft yellow

  return (
    <Box
      position="relative"
      bg={bgColor}
      minH="100vh"
      px={{ base: 6, md: 20 }}
      py={{ base: 16, md: 28 }}
      overflow="hidden"
    >
      {/* Background blurred decorative circles */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        width="300px"
        height="300px"
        bg="rgba(251, 146, 60, 0.2)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-120px"
        width="320px"
        height="320px"
        bg="rgba(59, 130, 246, 0.2)"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />

      {/* Subtle wavy orange band */}
      <WavyLines />

      {/* Curved lines overlay */}
      <CurvedLines />

      {/* Main Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, md: 20 }}
        maxW="7xl"
        mx="auto"
        zIndex={2}
        position="relative"
      >
        {/* Image Section with gentle float */}
        <Box
          flex="1"
          animation={`${float} 6s ease-in-out infinite`}
          maxW="320px"
        >
          <Image
            src="/images/moveo-summer.png"
            alt="Moveo the mascot"
            borderRadius="2xl"
            shadow="lg"
            mx="auto"
          />
        </Box>

        {/* Hero Text + Form */}
        <Box flex="2" textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.1"
            mb={6}
            color="gray.800"
          >
            Make Your Move{" "}
            <Text as="span" color={accent}>
              a Story
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            mb={10}
            color="gray.600"
            maxW="xl"
            fontWeight="medium"
          >
            AI-powered truck planner with memory trails & helpers
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={5}
            mb={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Input
              placeholder="From (city or zip)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              bg="white"
              size="lg"
              rounded="full"
              shadow="md"
            />
            <Input
              placeholder="To (destination)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              bg="white"
              size="lg"
              rounded="full"
              shadow="md"
            />
            <Button
              colorScheme="orange"
              px={8}
              size="lg"
              rounded="full"
              shadow="md"
              fontWeight="bold"
            >
              Plan My Move
            </Button>
          </Stack>

          <Text fontSize="md" fontStyle="italic" color={accent}>
            🧭 Don’t forget to drop your dwarf!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
