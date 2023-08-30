import { Button, Center, Container, PasswordInput, Stack, TextInput } from "@mantine/core";
import React from "react";
import { Form, Formik } from "formik";
import { authLoginProps } from "../../../server/controllers/auth.controller";
import { useDispatch } from "react-redux";
import { postLogin } from "@/redux/features/authSlice/auth.action";
import { withoutAuth } from "@/hooks/auth/auth";

const LoginPage = () => {
  const dispatch: any = useDispatch();

  const handleLogin = async (values: authLoginProps) => {
    try {
      const response = await dispatch(postLogin(values));
      if (response.meta.requestStatus === "fulfilled") {
        alert("Berhasil login!");
      }
    } catch (error: any) {
      alert(error.stack);
    }
  };

  return (
    <Container mih={"100vh"} fluid p={0} mx={0}>
      <Center h={"100vh"}>
        <Formik
          initialValues={{ username: "superadmin", password: "superadmin" }}
          onSubmit={(values: authLoginProps) => handleLogin(values)}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <TextInput
                  label="username"
                  onChange={e => setFieldValue("username", e.target.value)}
                  value={values.username}
                />
                <PasswordInput
                  label="password"
                  autoComplete="on"
                  onChange={e => setFieldValue("password", e.target.value)}
                  value={values.password}
                />
                <Button mt={8} type="submit" variant="default">
                  Login
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </Container>
  );
};

export default withoutAuth(LoginPage);
