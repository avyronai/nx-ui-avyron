import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Avyron AI",
  description:
    "Faça login em sua conta para acessar todas as funcionalidades da Avyron AI.",
};

import { LoginForm } from "@/app/login/login-form";
import { LoginHeader } from "@/app/login/login-header";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <LoginHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/avyron.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
