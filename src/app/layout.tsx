import type { Metadata } from "next";

import { fontSans } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils/helpers";

import "@/lib/styles/globals.css";

export const metadata: Metadata = {
  title: "[Product x] | Desigual.",
  description: "[Product description]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("antialased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
