import React, {useEffect} from 'react';
import Container from "../../components/Container";
// import Button from "../../components/Button";
import {ILoginRequest} from "../../types";
import authService from "../../services/auth.service";
import useAuthContext from "../../context/authContext/hook";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../components/Logo";
import {useForm} from "react-hook-form";
import {z, ZodType} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../components/ui/form";
import {Button} from "../../components/ui/button";
import {Loader2} from "lucide-react";

const LoginSchema: ZodType<ILoginRequest> = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required")
});

function LoginPage() {
  const {isAuthenticated, login} = useAuthContext();
  const form = useForm<ILoginRequest>({
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
        form.setError("username", {message: err.response.data.error});
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 mt-8">
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {/*<Input*/}
            {/*  error={!!errors.username && (errors.username.message as string)}*/}
            {/*  label="Username"*/}
            {/*  placeholder="Username"*/}
            {/*  {...register("username")}*/}
            {/*/>*/}

            {/*<Input*/}
            {/*  error={!!errors.password && (errors.password.message as string)}*/}
            {/*  label="Password"*/}
            {/*  placeholder="Password"*/}
            {/*  type="password"*/}
            {/*  {...register("password")}*/}
            {/*/>*/}

            <div>
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting || !form.formState.isValid}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin"/>
                )}
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default LoginPage;
