import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Input,
  Button,
  Image,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Box>
      {/* 1. Top Bar */}
      <Flex
        bg="gray.100"
        color="gray.700"
        fontSize="sm"
        justify="space-between"
        align="center"
        px={6}
        py={2}
      >
        <Text>📞 (800) 123-4567 | 🏠 100 N. Brand St, Los Angeles, CA</Text>
        <Text>
          USE COUPON{" "}
          <Text as="span" fontWeight="bold">
            #HOLLYMOVE
          </Text>{" "}
          FOR 3 FREE BOXES!
        </Text>
      </Flex>

      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={8}
          >
            {/* Left: Dwarf Image */}
            <Box flex="1" textAlign="center">
              <Image
                src="./public/images/moveo-summer.png"
                alt="Holly Move Dwarf"
                maxW="300px"
                mx="auto"
                borderRadius="2xl"
                shadow="lg"
              />
            </Box>

            {/* Right: Headline + Zip Form */}
            <Box flex="1">
              <Heading
                as="h2"
                size="xl"
                mb={4}
                color="orange.600"
                fontWeight="extrabold"
              >
                BEST MOVING RATES <br />
                IN LOS ANGELES
              </Heading>
              <Text fontSize="lg" mb={6} color="gray.600">
                Instant quote—No surprises, just a smooth adventure!
              </Text>

              <Stack
                direction={{ base: "column", sm: "row" }}
                maxW="md"
                spacing={2}
              >
                <Input
                  placeholder="Enter ZIP code"
                  bg="gray.50"
                  rounded="full"
                />
                <Button
                  colorScheme="orange"
                  rounded="full"
                  px={6}
                  whiteSpace="nowrap"
                >
                  GET A QUOTE
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* 4. Sub-Hero CTA */}
      <Box bg="orange.50" py={8}>
        <Container maxW="6xl" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="orange.600">
            INSTANT QUOTE
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
