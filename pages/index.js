import {
  Container,
  Box,
  Button,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { Logo } from "./../components";

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box>
        <Text p={4} mt={8}>
          Crie sua agenda compartilhada
        </Text>
      </Box>

      <FormControl id="email" isRequired>
        <FormLabel> Email address </FormLabel> <Input type="email" />
        <FormHelperText> We 'll never share your email.</FormHelperText>
      </FormControl>
    </Container>
  );
}
