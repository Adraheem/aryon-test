import React from 'react';
import Container from "../../components/Container";
import {Field, FieldProps, Form, Formik} from "formik";
import TextInput from "../../components/TextInput";
import * as yup from "yup"
import Button from "../../components/Button";

interface IProps {
}

function LoginPage(props: IProps) {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().required("Required")
  })

  const initialValues = {}

  const onSubmit = () => {
  }

  return (
    <Container>
      <div
        className="bg-white w-full max-w-xl p-8 mx-auto rounded-lg shadow-xl border border-slate-200">
        <h3 className="leading-none">Login</h3>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({isSubmitting, isValid}) => (
            <Form className="grid gap-5 mt-8">
              <Field name="username">
                {({field, meta}: FieldProps) => (
                  <TextInput
                    error={meta.touched && meta.error}
                    label="Username"
                    placeholder="Username"
                    {...field}
                  />
                )}
              </Field>

              <Field name="password">
                {({field, meta}: FieldProps) => (
                  <TextInput
                    error={meta.touched && meta.error}
                    label="Password"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                )}
              </Field>

              <div>
                <Button disabled>Login</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default LoginPage;
