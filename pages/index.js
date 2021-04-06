import { Container, Box, Button, Input, Text  } from '@chakra-ui/react'
import { Logo } from './../components'


export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>
    </Container>
  )
}
