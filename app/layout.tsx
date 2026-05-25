import type { Metadata } from "next";
import { Bitter, Geist, Geist_Mono, Merienda } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cata de Vinos",
  description: "Pagina de cata de vinos",
};

 const bitter = Bitter({variable: "--font-bitter-serif", subsets: ['latin'] })
const merienda = Merienda({variable: "--font-merienda-serif", subsets: ['latin'] }) 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${merienda.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
