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
                  <FormLabel>Volume (m³)</FormLabel>
                  <NumberInput
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
          <Box mt={10}>
            <Heading size="md" mb={3}>
              Plan Results:
            </Heading>
            <Code whiteSpace="pre-wrap" p={4} display="block" w="100%">
              {JSON.stringify(result, null, 2)}
            </Code>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
