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
      <Box>
      <FormControl id="email" p={4} isRequired>
        <FormLabel> Email address </FormLabel> <Input type="email" />
      </FormControl>

      <FormControl id="password" p={4} isRequired>
        <FormLabel> Senha </FormLabel> <Input type="password" />
      </FormControl>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Text>clocker.work/</Text>
      <FormControl id="username" p={4} isRequired>
        <Input type="username" />
      </FormControl>
      </Box>
      <Box p={4}>
      <Button width="100%" p={4}>Entrar</Button>
      </Box>
      </Box>
    </Container>
  );
}
