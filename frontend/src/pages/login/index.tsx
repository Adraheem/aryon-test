import React, {useEffect} from 'react';
import Container from "../../components/Container";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import {ILoginRequest} from "../../types";
import authService from "../../services/auth.service";
import useAuthContext from "../../context/authContext/hook";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../components/Logo";
import {useForm} from "react-hook-form";
import {z, ZodType} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const LoginSchema: ZodType<ILoginRequest> = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required")
});

function LoginPage() {
  const {isAuthenticated, login} = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting, isValid},
    setError
  } = useForm<ILoginRequest>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
    reValidateMode: "onChange"
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", {replace: true});
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (values: ILoginRequest) => {
    try {
      const res = await authService.login(values);
      login(res.token);
    } catch (err: any) {
      if (err?.response?.data?.error) {
        setError("username", {message: err.response.data.error});
      } else {
        toast.error(err.message ?? "An error occurred")
      }
    }
  }

  return (
    <Container>
      <div
        className="bg-white dark:bg-primary-900 w-full max-w-xl p-8 mx-auto rounded-lg shadow-xl border border-slate-200 dark:border-primary-800"
      >
        <Logo/>

        <h3 className="leading-none mt-6">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 mt-8">
          <TextInput
            error={!!errors.username && (errors.username.message as string)}
            label="Username"
            placeholder="Username"
            {...register("username")}
          />

          <TextInput
            error={!!errors.password && (errors.password.message as string)}
            label="Password"
            placeholder="Password"
            type="password"
            {...register("password")}
          />

          <div>
            <Button
              isLoading={isSubmitting}
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;
