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
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { useState } from "react";

// Simple subtle floating animation for the mascot image
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

export default function LandingPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const accent = useColorModeValue("#F97316", "#FB923C"); // orange shade
  const blueBg = useColorModeValue(
    "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)"
  );

  return (
    <Box
      minH="100vh"
      bgGradient={blueBg}
      color="white"
      px={{ base: 6, md: 20 }}
      py={{ base: 16, md: 28 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="7xl"
        w="full"
        gap={{ base: 12, md: 24 }}
        zIndex={10}
      >
        {/* Hero Image with float */}
        <Box
          flex="1"
          maxW={{ base: "280px", md: "360px" }}
          animation={`${float} 6s ease-in-out infinite`}
          filter="drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))"
        >
          <Image
            src="/images/moveo-summer.png"
            alt="Moveo the mascot"
            borderRadius="2xl"
            shadow="xl"
            w="full"
          />
        </Box>

        {/* Hero Text & Inputs */}
        <Box flex="2" textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.1"
            mb={6}
            letterSpacing="-0.02em"
            textShadow="0 4px 6px rgba(0,0,0,0.3)"
          >
            Make Your Move{" "}
            <Text as="span" color={accent}>
              a Story
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            mb={10}
            maxW="lg"
            fontWeight="medium"
            opacity={0.85}
            textShadow="0 2px 3px rgba(0,0,0,0.2)"
          >
            AI-powered truck planner with memory trails & helpers
          </Text>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            mb={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Input
              placeholder="From (city or zip)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              bg="white"
              color="gray.800"
              size="lg"
              rounded="full"
              shadow="md"
              _focus={{
                boxShadow: `0 0 10px ${accent}`,
                borderColor: accent,
              }}
            />
            <Input
              placeholder="To (destination)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              bg="white"
              color="gray.800"
              size="lg"
              rounded="full"
              shadow="md"
              _focus={{
                boxShadow: `0 0 10px ${accent}`,
                borderColor: accent,
              }}
            />
            <Button
              colorScheme="orange"
              px={10}
              size="lg"
              rounded="full"
              shadow="lg"
              fontWeight="bold"
              _hover={{ shadow: "2xl" }}
            >
              Plan My Move
            </Button>
          </Stack>

          <Text
            fontStyle="italic"
            fontSize="md"
            fontWeight="semibold"
            color={accent}
            userSelect="none"
            textShadow="0 1px 2px rgba(0,0,0,0.25)"
          >
            🧭 Don’t forget to drop your dwarf!
          </Text>
        </Box>
      </Flex>

      {/* Optional subtle background accent circles */}
      <Box
        position="absolute"
        top="-150px"
        left="-150px"
        w="400px"
        h="400px"
        bg="rgba(251, 146, 60, 0.15)"
        rounded="full"
        filter="blur(120px)"
        zIndex={1}
      />
      <Box
        position="absolute"
        bottom="-150px"
        right="-150px"
        w="400px"
        h="400px"
        bg="rgba(59, 130, 246, 0.15)"
        rounded="full"
        filter="blur(120px)"
        zIndex={1}
      />
    </Box>
  );
}
