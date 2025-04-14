import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; // Importer le Header
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"; // Importer le Toaster
import { cn } from "@/lib/utils"; // Utilitaires Shadcn

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); // Utiliser Inter

export const metadata: Metadata = {
  title: "TechShop - Votre spécialiste informatique", // Mettre à jour le titre
  description: "Vente d'ordinateurs, composants, périphériques et accessoires.", // Mettre à jour la description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning> {/* Mettre la langue en français */}
       <head /> {/* head est géré par Next.js */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable // Appliquer la variable de police
        )}
      >
         {/* Wrapper pour sticky footer si nécessaire */}
         <div className="relative flex min-h-screen flex-col">
           <Header /> {/* Ajouter le Header */}
           <main className="flex-1">{children}</main> {/* Contenu principal */}
          <Footer />
         </div>
         <Toaster /> {/* Ajouter le composant Toaster pour les notifications */}
      </body>
    </html>
  );
}
