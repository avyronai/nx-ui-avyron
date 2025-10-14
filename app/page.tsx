"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedButton 
} from "@/components/animated-element";
import { FloatingIcon } from "@/components/floating-elements";
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home" || sectionId === "") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Detectar seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "testimonials", "pricing", "faq"];
      const scrollPosition = window.scrollY + 200; // Aumentei o offset para melhor detecção
      let currentSection = "";

      // Verifica cada seção
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }

      // Se não encontrou nenhuma seção e está no topo, marca como "home"
      if (!currentSection && window.scrollY < 300) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    // Executa uma vez no carregamento
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
      />

      {/* Hero Section */}
      <section id="home" className="relative py-15 pt-32 px-4 overflow-hidden">
        {/* Floating Icons */}
        <FloatingIcon 
          icon={Zap} 
          delay={0} 
          className="absolute top-25 left-4 sm:top-32 sm:left-8 md:top-32 md:left-20" 
        />
        <FloatingIcon 
          icon={Shield} 
          delay={1} 
          className="absolute top-52 right-4 sm:top-48 sm:right-8 md:top-48 md:right-32" 
        />
        <FloatingIcon 
          icon={Globe} 
          delay={2} 
          className="absolute bottom-10 left-4 sm:bottom-40 sm:left-8 md:bottom-40 md:left-32" 
        />
        <FloatingIcon 
          icon={Star} 
          delay={3} 
          className="absolute bottom-55 right-4 sm:bottom-32 sm:right-8 md:bottom-32 md:right-20" 
        />
        
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <AnimatedElement delay={0.1} direction="up" distance={30}>
            <Badge variant="secondary" className="mb-6 mt-4 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              Nova funcionalidade disponível • IA Avançada
            </Badge>
          </AnimatedElement>
          
          <AnimatedText delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-primary bg-clip-text text-transparent">
                Transforme
              </span>
              <br />
              <span className="text-foreground">
                sua ideia em
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                realidade
              </span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              A plataforma mais <span className="font-semibold text-foreground">avançada</span> para criar, 
              gerenciar e <span className="font-semibold text-primary">escalar</span> seu negócio digital. 
              Junte-se a mais de <span className="font-bold text-primary">50.000+</span> empresas que já 
              transformaram seus resultados.
            </p>
          </AnimatedText>
          
          <AnimatedElement delay={0.4} direction="up" distance={40}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <AnimatedButton delay={0.5}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-4 h-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-semibold">Começar Gratuitamente</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </AnimatedButton>
              <AnimatedButton delay={0.6}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-4 h-auto border-2 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-semibold">Ver Demonstração</span>
                </Button>
              </AnimatedButton>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.7} direction="up" distance={20}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14 dias grátis</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que escolher nossa plataforma?
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos as ferramentas mais avançadas e intuitivas para
                impulsionar seu crescimento
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard delay={0.1}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Performance Extrema</CardTitle>
                  <CardDescription>
                    Carregamento 10x mais rápido com nossa
                    otimizada e CDN global
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Segurança Avançada</CardTitle>
                  <CardDescription>
                    Proteção de nível bancário com criptografia end-to-end e
                    monitoramento 24/7
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Escalabilidade Global</CardTitle>
                  <CardDescription>
                    Infraestrutura distribuída em 5 continentes para máxima
                    disponibilidade
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Colaboração em Equipe</CardTitle>
                  <CardDescription>
                    Trabalhe em conjunto com ferramentas de colaboração em tempo
                    real
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fácil de Usar</CardTitle>
                  <CardDescription>
                    Interface intuitiva que não requer conhecimento técnico para
                    começar
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Suporte Premium</CardTitle>
                  <CardDescription>
                    Suporte técnico especializado disponível 24/7 para todos os
                    clientes
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O que nossos clientes dizem
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Mais de 10.000 empresas confiam em nossa plataforma
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard delay={0.1}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "A plataforma revolucionou completamente nossa forma de
                    trabalhar. O aumento na produtividade foi imediato e os
                    resultados superaram todas as expectativas."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Mendes</p>
                      <p className="text-sm text-muted-foreground">
                        CEO, TechCorp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "A interface é tão intuitiva que nossa equipe se adaptou em
                    poucos dias. O suporte ao cliente é excepcional e sempre
                    disponível quando precisamos."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Roberto Silva</p>
                      <p className="text-sm text-muted-foreground">
                        Diretor, Inovação Digital
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "Os resultados foram impressionantes. Conseguimos reduzir
                    custos em 40% e aumentar nossa eficiência operacional em mais
                    de 200% no primeiro mês."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Marina Costa</p>
                      <p className="text-sm text-muted-foreground">
                        Fundadora, StartupX
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planos para todos os tamanhos
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha o plano ideal para seu negócio. Todos incluem 14 dias
                grátis.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard delay={0.1}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 29</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="mt-4">
                    Perfeito para começar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Até 5 projetos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>10GB de armazenamento</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Suporte por email</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 transition-all duration-200 hover:scale-105 active:scale-95">
                    Começar Teste Grátis
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="border-2 border-primary shadow-xl relative hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 79</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="mt-4">
                    Para equipes em crescimento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Projetos ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>100GB de armazenamento</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Suporte prioritário</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Integrações avançadas</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 transition-all duration-200 hover:scale-105 active:scale-95">
                    Começar Teste Grátis
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 199</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="mt-4">
                    Para grandes empresas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Tudo do Professional</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Armazenamento ilimitado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Gerente de conta dedicado</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 transition-all duration-200 hover:scale-105 active:scale-95">
                    Começar Teste Grátis
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-0 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl mb-8 text-muted-foreground">
              Junte-se a milhares de empresas que já estão crescendo com nossa
              plataforma. Comece sua jornada hoje mesmo.
            </p>
          </AnimatedText>
          <AnimatedElement delay={0.3} direction="up" distance={40}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton delay={0.4}>
                <Button size="lg" className="text-lg px-8">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AnimatedButton>
              <AnimatedButton delay={0.5}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Agendar Demonstração
                </Button>
              </AnimatedButton>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={0.6} direction="up" distance={20}>
            <p className="text-sm text-muted-foreground mt-4">
              ✨ 14 dias grátis • Sem compromisso • Suporte 24/7
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 ">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossa plataforma
              </p>
            </AnimatedText>
          </div>

          <AnimatedElement delay={0.3} direction="up" distance={50}>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
              value="item-1"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                Como funciona o período de teste gratuito?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Oferecemos 14 dias grátis para você testar todas as
                funcionalidades da nossa plataforma. Não é necessário cartão de
                crédito para começar. Você pode cancelar a qualquer momento sem
                compromisso ou taxas adicionais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                Quais são as formas de pagamento aceitas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceitamos cartões de crédito (Visa, Mastercard, American
                Express), PIX, boleto bancário e transferência bancária. Para
                planos Enterprise, também oferecemos faturamento corporativo com
                condições especiais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                Posso migrar meus dados de outras plataformas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Nossa equipe de suporte oferece migração gratuita de dados
                das principais plataformas do mercado. Temos ferramentas
                automatizadas e suporte especializado para garantir que sua
                migração seja rápida e sem perda de dados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                Que tipo de suporte técnico vocês oferecem?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Oferecemos suporte por email, chat ao vivo e telefone. Planos
                Professional e Enterprise incluem suporte prioritário e gerente
                de conta dedicado. Temos também uma base de conhecimento
                completa e documentação técnica detalhada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                É possível personalizar a plataforma para minha empresa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Oferecemos customizações avançadas para planos Professional
                e Enterprise, incluindo integrações personalizadas, branding
                customizado, APIs dedicadas e desenvolvimento de funcionalidades
                específicas para suas necessidades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline cursor-pointer">
                Como é feita a segurança dos meus dados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Utilizamos criptografia end-to-end, certificações SOC 2 e ISO
                27001, backup automático em múltiplas localizações e
                monitoramento 24/7. Todos os dados são armazenados em servidores
                seguros e seguimos as melhores práticas de segurança da
                indústria.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </AnimatedElement>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Falar com Suporte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <AnimatedElement delay={0.1} direction="up" distance={30}>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      L
                    </span>
                  </div>
                  <span className="text-xl font-bold">LandingApp</span>
                </div>
                <p className="text-muted-foreground">
                  A plataforma mais completa para transformar suas ideias em
                  realidade digital.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2} direction="up" distance={30}>
              <div>
                <h3 className="font-semibold mb-4">Produto</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Recursos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Preços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Integrações
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.3} direction="up" distance={30}>
              <div>
                <h3 className="font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Carreiras
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.4} direction="up" distance={30}>
              <div>
                <h3 className="font-semibold mb-4">Suporte</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Central de Ajuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Documentação
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Comunidade
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
          <Separator className="my-8" />
          <AnimatedElement delay={0.5} direction="up" distance={20}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © 2024 LandingApp. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Termos de Uso
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </footer>
    </div>
  );
}
