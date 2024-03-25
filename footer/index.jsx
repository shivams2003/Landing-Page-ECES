import * as React from "react";
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { baseUrl,siteConfig } from "./site-config";
import FooterSignup from "./signup";
import {
  ExternalFooterLink,
  InternalFooterLink,
  ExternalSocialLink,
} from "./links";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <SimpleGrid
        flexDirection="column-reverse"
        gridTemplateColumns={["1fr", "1fr"]} // Set to two columns
        borderTopWidth={2}
        mt="30px"
        borderTopColor="gray.900"
        pt="20px"
        textAlign="center"
      >
        {/* <Box d={['block', 'block', 'none', 'none']} mb="30px">
          <FooterSignup />
        </Box> */}
        <Box>
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Stack mb={["10px", "10px", 0, 0]}>
              <Text as="span">
                <ExternalFooterLink
                  href="mailto:nitw.ecea@gmail.com"
                  text="Contact us"
                />
              </Text>
              {/* <Text as="span">
                <InternalFooterLink href="#" text="Open source projects" />
              </Text> */}
            </Stack>
            <Stack>
              <Text as="span">
                <Popover placement="top">
                  <PopoverTrigger>
                    <Text
                      as="span"
                      _focus={{ outline: "none", boxShadow: "none" }}
                      fontWeight={500}
                      color="gray.500"
                      cursor="pointer"
                      _hover={{ color: "gray.600", textDecoration: "none" }}
                    >
                      Social Accounts
                    </Text>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Stack
                          as="footer"
                          isInline
                          spacing={[1, 2]}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ExternalSocialLink
                            href={siteConfig.author.github}
                            icon={<FaGithub />}
                            type="gray"
                            label="Github Account"
                          />

                          <ExternalSocialLink
                            href={siteConfig.author.linkedin}
                            icon={<FaLinkedin />}
                            type="linkedin"
                            label="LinkedIn Account"
                          />
                          <ExternalSocialLink
                            href={siteConfig.author.instagram}
                            icon={<FaInstagram />}
                            type="instagram"
                            label="Instagram Account"
                          />
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Text>
            </Stack>
          </SimpleGrid>
          <Text mt="20px" color="gray.500" textAlign="center">
            Made with ❤️ by{" "}
            <ChakraLink
              _focus={{ boxShadow: "none", outline: "none" }}
              href={baseUrl}
              fontWeight={600}
              color="gray.400"
              bgClip="text"
              bgGradient="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" // Updated background gradient
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)", // Hover effect (example)
              }}
            >
              ECES
            </ChakraLink>{" "}
          </Text>
        </Box>
        <br />
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
