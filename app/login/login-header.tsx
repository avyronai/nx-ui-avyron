"use client";

import Image from "next/image";
import { useLoadingRouter } from "@/hooks/use-loading-router";

export function LoginHeader() {
  const router = useLoadingRouter();

  return (
    <div className="flex justify-center gap-2 md:justify-start">
      {/* Logo */}
      <button 
        className="flex items-center space-x-3 group cursor-pointer" 
        onClick={() => router.push("/")}
      >
        <div className="w-9 h-9 flex items-center justify-center">
          <Image src="/avyron.png" alt="Avyron AI" width={36} height={36} />
        </div>
        <span className="text-lg font-bold bg-foreground bg-clip-text text-transparent">
          Avyron AI
        </span>
      </button>
    </div>
  );
}
