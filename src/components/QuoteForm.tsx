import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

interface FormData {
  from: string;
  to: string;
  date: string;
  volume: number;
  needHelpers: boolean;
}

interface QuoteFormProps {
  formData: FormData;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onVolumeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function QuoteForm({
  formData,
  onChange,
  onVolumeChange,
  onSubmit,
  loading,
}: QuoteFormProps) {
  return (
    <Box
      flex="1"
      bg="white"
      p={8}
      borderRadius="xl"
      shadow="lg"
      maxW="500px"
      w="full"
    >
      <form onSubmit={onSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>From (city)</FormLabel>
            <Input
              name="from"
              value={formData.from}
              onChange={onChange}
              placeholder="From"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>To (city)</FormLabel>
            <Input
              name="to"
              value={formData.to}
              onChange={onChange}
              placeholder="To"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Volume (m³) or Select Truck Size</FormLabel>

            <Select
              name="volume"
              placeholder="Choose a preset"
              onChange={(e) => onVolumeChange(e.target.value)}
              value={formData.volume === 0 ? "" : String(formData.volume)}
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
              onChange={(valueString) => onVolumeChange(valueString)}
            >
              <NumberInputField name="volume" />
            </NumberInput>
          </FormControl>

          <FormControl>
            <Checkbox
              name="needHelpers"
              isChecked={formData.needHelpers}
              onChange={onChange}
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
  );
}
