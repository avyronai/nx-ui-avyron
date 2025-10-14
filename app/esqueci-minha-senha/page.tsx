'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import { useLoadingRouter } from '@/hooks/use-loading-router';
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedButton 
} from "@/components/animated-element";

export default function EsqueciMinhaSenhaPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useLoadingRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular processo de envio
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <AnimatedCard delay={0.1}>
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <AnimatedElement delay={0.2} direction="up" distance={30}>
                <div className="mx-auto h-16 w-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </AnimatedElement>
              <AnimatedText delay={0.3}>
                <CardTitle className="text-2xl">E-mail enviado!</CardTitle>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <CardDescription>
                  Enviamos um link para redefinir sua senha para <strong>{email}</strong>
                </CardDescription>
              </AnimatedText>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText delay={0.5}>
                <p className="text-sm text-muted-foreground text-center">
                  Verifique sua caixa de entrada e clique no link para criar uma nova senha.
                  O link expira em 24 horas.
                </p>
              </AnimatedText>
              <AnimatedElement delay={0.6} direction="up" distance={30}>
                <div className="flex flex-col gap-2">
                  <AnimatedButton delay={0.7}>
                    <Button 
                      onClick={() => router.push('/login')}
                      className="w-full"
                    >
                      Voltar ao Login
                    </Button>
                  </AnimatedButton>
                  <AnimatedButton delay={0.8}>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail('');
                      }}
                      className="w-full"
                    >
                      Enviar novamente
                    </Button>
                  </AnimatedButton>
                </div>
              </AnimatedElement>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AnimatedCard delay={0.1}>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <AnimatedElement delay={0.2} direction="up" distance={30}>
              <div className="flex items-center gap-2 mb-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => router.push('/login')}
                  className="h-8 w-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <CardTitle className="text-2xl">Esqueci minha senha</CardTitle>
              </div>
            </AnimatedElement>
            <AnimatedText delay={0.3}>
              <CardDescription>
                Digite seu e-mail e enviaremos um link para redefinir sua senha
              </CardDescription>
            </AnimatedText>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatedElement delay={0.4} direction="up" distance={30}>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedButton delay={0.5}>
                <Button
                  type="submit"
                  className="w-full h-11 font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    'Enviar link de recuperação'
                  )}
                </Button>
              </AnimatedButton>
            </form>

            <AnimatedElement delay={0.6} direction="up" distance={20}>
              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">
                  Lembrou da senha?{' '}
                </span>
                <Button 
                  variant="link" 
                  className="h-auto p-0 text-sm text-primary hover:text-primary/80"
                  onClick={() => router.push('/login')}
                >
                  Voltar ao login
                </Button>
              </div>
            </AnimatedElement>
          </CardContent>
        </Card>
      </AnimatedCard>
    </div>
  );
}
