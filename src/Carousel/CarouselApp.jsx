import React, { useState, useEffect } from "react";
import { capsFirst } from "../utils";
import theme from "./theme";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  VStack,
  Text,
  Flex
} from "@chakra-ui/react";

import ChakraCarousel from "./chakraCarousel";

function CarouselApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
      >
        <ChakraCarousel gap={32}>
          {data.slice(5, 15).map((post, index) => (
            <Flex
              key={index}
              boxShadow="md"
              flexDirection="column"
              overflow="hidden"
              bg="base.d100"
              rounded="md"
              p={5}
              color="white"
            >
              <VStack align="start" spacing={4}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="left"
                  mb={2}
                >
                  {capsFirst(post.title)}
                </Heading>
                <Text>{capsFirst(post.body)}</Text>
              </VStack>
              {/* Removed HStack, Tag components, and Button from here */}
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}

export default CarouselApp;
