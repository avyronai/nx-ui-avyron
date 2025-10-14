"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  LoaderIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLoadingRouter } from "@/hooks/use-loading-router";
import { toast } from "sonner";
import {
  AnimatedElement,
  AnimatedCard,
  AnimatedText,
  AnimatedButton,
} from "@/components/animated-element";

export default function LoginPage() {
  const router = useLoadingRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => {
            console.log("Dados de login:", formData);
            resolve({ name: "Login" });
            toast.success("Login realizado com sucesso");
            setIsLoading(false);
          }, 2000)
        ),
      {
        loading: "Loading...",
        success: (data) => `${data.name} has been done`,
        error: "Error",
      }
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Header */}
        <AnimatedElement delay={0.1} direction="down" distance={30}>
          <div className="text-center space-y-2">
            <div className="mx-auto h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Lock className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Bem-vindo de volta
            </h1>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>
        </AnimatedElement>

        {/* Card de Login */}
        <AnimatedCard delay={0.2}>
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/")}
                  className="h-8 w-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <CardTitle className="text-2xl">Entrar</CardTitle>
              </div>
              <CardDescription>
                Digite seu e-mail e senha para fazer login
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>

                {/* Campo de Senha */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-11"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Lembrar-me e Esqueci a senha */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember-me"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="remember-me"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Lembrar-me
                    </Label>
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-sm text-primary hover:text-primary/80"
                    onClick={() => router.push("/esqueci-minha-senha")}
                  >
                    Esqueceu sua senha?
                  </Button>
                </div>

                {/* Botão de Login */}
                <AnimatedButton delay={0.3}>
                  <Button
                    type="submit"
                    className="w-full h-11 font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <LoaderIcon className="size-4 animate-spin" />
                        <span>Entrando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Entrar</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </AnimatedButton>
              </form>

              {/* Link para registro */}
              <AnimatedElement delay={0.7} direction="up" distance={20}>
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    Não tem uma conta?{" "}
                  </span>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-sm text-primary hover:text-primary/80"
                  >
                    Cadastre-se aqui
                  </Button>
                </div>
              </AnimatedElement>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Footer */}
        <AnimatedElement delay={0.8} direction="up" distance={20}>
          <div className="text-center space-y-4">
            <ThemeToggle />
            <p className="text-xs text-muted-foreground">
              © 2024 Minha Empresa. Todos os direitos reservados.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
