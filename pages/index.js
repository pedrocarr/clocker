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
  FormHelperText,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/react";

import { Logo } from "./../components";
import firebase from './../config/firebase'

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
  username: yup.string().required("Preenchimento obrigatório"),
})

export default function Home() {
  const { values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
    } = useFormik({
    onSubmit: (values, form) => {
      console.log(values);
    },
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
        <FormLabel> Email address </FormLabel> <Input size={"lg"} type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
      </FormControl>

      <FormControl id="password" p={4} isRequired>
        <FormLabel> Senha </FormLabel> <Input size={"lg"} type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
      </FormControl>



      <FormControl id="username" p={4} isRequired>
        <InputGroup size="lg">
        <InputLeftAddon children="clocker.work/" />
        <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
        </InputGroup>
        {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
      </FormControl>

      <Box p={4}>
      <Button width="100%" colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
      </Box>
      </Box>
    </Container>
  );
}
