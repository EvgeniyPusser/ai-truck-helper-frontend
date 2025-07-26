import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
  VStack,
  Heading,
  Code,
  Flex,
  Container,
  Select,
} from "@chakra-ui/react";

function App() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    volume: 0,
    needHelpers: false,
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  return (
    <Box minH="100vh" bg="gray.50" py={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Hero Text Section */}
          <Box flex="1" pr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
            <Heading size="2xl" mb={4}>
              Plan Your Move Like a Pro
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Book your truck, estimate space, and get AI help — all in one
              place.
            </Text>
          </Box>

          {/* Form Section */}
          <Box
            flex="1"
            bg="white"
            p={8}
            borderRadius="xl"
            shadow="lg"
            maxW="500px"
            w="full"
          >
            {/* Form Start */}
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>From (city)</FormLabel>
                  <Input
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="From"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>To (city)</FormLabel>
                  <Input
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="To"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Volume (m³) or Select Truck Size</FormLabel>

                  <Select
                    placeholder="Choose a preset"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        volume: Number(e.target.value),
                      }))
                    }
                    value={formData.volume === 0 ? "" : formData.volume}
                  >
                    <option value="5">Small Van (5 m³)</option>
                    <option value="12">Medium Truck (12 m³)</option>
                    <option value="20">Large Truck (20 m³)</option>
                    <option value="30">Extra Large (30 m³+)</option>
                  </Select>

                  <Text mt={2} fontSize="sm" color="gray.500">
                    Or enter a custom estimate:
                  </Text>

                  <NumberInput
                    mt={1}
                    min={1}
                    value={formData.volume}
                    onChange={(valueString) =>
                      setFormData((prev) => ({
                        ...prev,
                        volume: Number(valueString),
                      }))
                    }
                  >
                    <NumberInputField name="volume" />
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <Checkbox
                    name="needHelpers"
                    isChecked={formData.needHelpers}
                    onChange={handleChange}
                  >
                    Need helpers
                  </Checkbox>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  isDisabled={loading}
                  w="full"
                >
                  {loading ? <Spinner size="sm" /> : "Get Plan"}
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>

        {/* Result Section */}
        {result && (
          <Box
            mt={10}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
            maxW="600px"
            mx="auto"
          >
            <Heading size="lg" mb={4} textAlign="center" color="teal.600">
              Your Move Plan Results
            </Heading>

            <Box
              as="pre"
              whiteSpace="pre-wrap"
              fontSize="md"
              lineHeight="tall"
              p={4}
              bg="gray.50"
              borderRadius="md"
              overflowX="auto"
              maxH="300px"
            >
              {typeof result === "string"
                ? result
                : JSON.stringify(result, null, 2)}
            </Box>

            <Button
              mt={4}
              colorScheme="red"
              onClick={() => {
                setResult(null);
                setFormData({
                  from: "",
                  to: "",
                  date: "",
                  volume: 0,
                  needHelpers: false,
                });
              }}
              w="full"
            >
              Reset Form
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
