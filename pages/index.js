import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Container,
  Box,
  Button,
  Input,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { Logo } from "./../components";

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
  username: yup.string().required("Preenchimento obrigatório"),
})

export default function Home() {
  const formik = useFormik({
    onSubmit: () => { },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  })
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
        <FormLabel> Email address </FormLabel> <Input type="email" /> values={formik.values.email}
      </FormControl>

      <FormControl id="password" p={4} isRequired>
        <FormLabel> Senha </FormLabel> <Input type="password" values={formik.values.password} />
      </FormControl>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Text>clocker.work/</Text>
      <FormControl id="username" p={4} isRequired>
        <Input type="username" values={formik.values.username} />
      </FormControl>
      </Box>
      <Box p={4}>
      <Button width="100%" p={4}>Entrar</Button>
      </Box>
      </Box>
    </Container>
  );
}
