import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingBar } from "@/components/loading-bar";
import { RouteLoadingProvider } from "@/components/route-loading-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avyron AI - Transforme ideias em realidade",
    template: "%s | Avyron AI",
  },
  description: "A plataforma mais avançada para criar, gerenciar e escalar seu negócio digital. Junte-se a mais de 50.000+ empresas que já transformaram seus resultados.",
  keywords: ["plataforma digital", "negócio online", "escalar empresa", "tecnologia"],
  authors: [{ name: "Avyron AI" }],
  creator: "Avyron AI",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://avyronai.com",
    title: "Avyron AI - Transforme ideias em realidade",
    description: "A plataforma mais avançada para criar, gerenciar e escalar seu negócio digital.",
    siteName: "Avyron AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyron AI - Transforme ideias em realidade",
    description: "A plataforma mais avançada para criar, gerenciar e escalar seu negócio digital.",
    creator: "@avyronai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RouteLoadingProvider>
            <LoadingBar />
            {children}
            <Toaster />
          </RouteLoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
