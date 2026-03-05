import type { Metadata } from "next";

import { Header } from "@/components/header";
import { fontSans } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils/helpers";

import "@/lib/styles/globals.css";

export const metadata: Metadata = {
  title: "[Product X] | Desigual.",
  description: "[Product description]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen antialased text-brand-black", fontSans.variable)}>
        <Header />
        <main className="font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
