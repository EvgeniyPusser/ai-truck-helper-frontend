// MoveForm component
// src/components/MoveForm.tsx
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";
import React from "react";

interface MoveFormProps {
  formData: {
    from: string;
    to: string;
    date: string;
    volume: number;
    needHelpers: boolean;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function MoveForm({ formData, onChange, onVolumeChange, onSubmit, loading }: MoveFormProps) {
  return (
    <Box
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      maxW="400px"
      w="100%"
      as="form"
      onSubmit={onSubmit}
    >
      <Stack spacing={4}>
        <FormControl id="from" isRequired>
          <FormLabel>From (Zip or City)</FormLabel>
          <Input
            name="from"
            value={formData.from}
            onChange={onChange}
            placeholder="Enter starting zip code or city"
          />
        </FormControl>

        <FormControl id="to" isRequired>
          <FormLabel>To (Zip or City)</FormLabel>
          <Input
            name="to"
            value={formData.to}
            onChange={onChange}
            placeholder="Enter destination zip code or city"
          />
        </FormControl>

        <FormControl id="date" isRequired>
          <FormLabel>Moving Date</FormLabel>
          <Input type="date" name="date" value={formData.date} onChange={onChange} />
        </FormControl>

        <FormControl id="volume" isRequired>
          <FormLabel>Estimated Volume (m³)</FormLabel>
          <NumberInput
            min={1}
            value={formData.volume}
            onChange={(value) => onVolumeChange(value)}
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
            Need helpers for loading/unloading
          </Checkbox>
        </FormControl>

        <Button
          colorScheme="blue"
          type="submit"
          isLoading={loading}
          loadingText="Getting Plan"
        >
          Get Moving Plan
        </Button>
      </Stack>
    </Box>
  );
}

