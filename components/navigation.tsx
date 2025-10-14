"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLoadingRouter } from "@/hooks/use-loading-router";
import { 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Zap,
  MessageSquare,
  DollarSign,
  HelpCircle,
  User,
  LogIn
} from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useLoadingRouter();

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao clicar em um link
  const handleLinkClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: "home", label: "Início", icon: Home},
    { id: "features", label: "Recursos", icon: Zap },
    { id: "testimonials", label: "Depoimentos", icon: MessageSquare },
    { id: "pricing", label: "Preços", icon: DollarSign },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b shadow-lg" 
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Image src="/avyron.png" alt="Avyron AI" width={36} height={36} />
              </div>
              <span className="text-lg font-bold bg-foreground bg-clip-text text-transparent">
                Avyron AI
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <div className="flex items-center space-x-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 group cursor-pointer ${
                      activeSection === item.id
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </span>
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-primary/5 rounded-lg border border-primary/20"></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/login")}
                  className="transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
                <Button
                  size="sm"
                  onClick={() => router.push("/cadastro")}
                  className="transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r from-primary to-primary/90"
                >
                  <User className="w-4 h-4 mr-2" />
                  Cadastrar
                </Button>
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant={isMenuOpen ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative w-11 h-11 transition-all duration-200 ${
                  isMenuOpen 
                    ? "bg-primary/10 hover:bg-primary/20 scale-105" 
                    : "hover:bg-accent/80"
                }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X 
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                </div>
                {isMenuOpen && (
                  <div className="absolute inset-0 rounded-md bg-primary/5 animate-pulse"></div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l shadow-2xl transform transition-all duration-300 z-[70] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    Av
                  </span>
                </div>
                <span className="text-lg font-bold">Avyron AI</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </nav>

            {/* Footer Actions */}
            <div className="p-6 border-t space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => {
                  router.push("/login");
                  setIsMenuOpen(false);
                }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button
                className="w-full justify-center bg-gradient-to-r from-primary to-primary/90"
                onClick={() => {
                  router.push("/cadastro");
                  setIsMenuOpen(false);
                }}
              >
                <User className="w-4 h-4 mr-2" />
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
