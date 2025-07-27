// Placeholder file for project structure// src/components/Navbar.tsx
import React from "react";
import {
  Box,
  Flex,
  Link,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "About", "Services", "Contact"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{ textDecoration: "none", bg: "gray.200" }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} shadow="md" position="sticky" top="0" zIndex="100">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontSize="lg">
          HolyMove
        </Box>

        <Flex alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            mr={4}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
