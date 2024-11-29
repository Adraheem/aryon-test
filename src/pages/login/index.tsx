import React, {useEffect} from 'react';
import Container from "../../components/Container";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import TextInput from "../../components/TextInput";
import * as yup from "yup"
import Button from "../../components/Button";
import {ILoginRequest} from "../../types";
import authService from "../../services/auth.service";
import useAuthContext from "../../context/authContext/hook";
import {useNavigate} from "react-router-dom";

interface IProps {
}

function LoginPage(props: IProps) {
  const {isAuthenticated, login} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", {replace: true});
    }
  }, [isAuthenticated, navigate]);

  const validationSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().required("Required")
  })

  const initialValues: ILoginRequest = {
    username: "",
    password: ""
  }

  const onSubmit = (values: ILoginRequest, helpers: FormikHelpers<ILoginRequest>) => {
    authService.login(values)
      .then(res => {
        helpers.setSubmitting(false);
        login(res.token);
      })
      .catch(err => {
        helpers.setSubmitting(false);

      });
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
                <Button
                  isLoading={isSubmitting}
                  disabled={isSubmitting || !isValid}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default LoginPage;
