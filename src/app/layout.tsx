import type { Metadata } from "next";
import { Onest } from "next/font/google"
import "./globals.css";
import { MenuMobile } from "./_components/menu-mobile";
import { Sidebar } from "./_components/sidebar";
import { TopBar } from "@/components/topbar";

const fontsans = Onest({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Edunex - Encontre cursos gratuitos com certificado",
  description: "Edunex oferece uma vasta seleção de cursos gratuitos com certificado para seu desenvolvimento pessoal e profissional.",
  keywords: ["cursos gratuitos", "certificado", "desenvolvimento pessoal", "desenvolvimento profissional", "Edunex"],
  authors: [{ name: "Edunex", url: `${process.env.NEXT_PUBLIC_BASE_URL}`}],
  creator: "Edunex",
  openGraph: {
    title: "Edunex - Encontre cursos gratuitos com certificado",
    description: "Descubra uma ampla variedade de cursos gratuitos com certificado para impulsionar seu desenvolvimento pessoal e profissional na Edunex.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Edunex",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/card.png`,
        width: 1200,
        height: 630,
        alt: "Edunex - Encontre Cursos Gratuitos",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edunex - Encontre cursos gratuitos com certificado",
    description: "Acesse cursos gratuitos com certificado na Edunex e desenvolva suas habilidades pessoais e profissionais.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/card.png`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body
        className={`${fontsans.className} antialiased bg-[#F8F9FA]`}
      >
        <div className="h-full w-full">
        <aside className="fixed hidden px-6 lg:block bg-white h-screen w-full max-w-[256px] z-30 border-r border-black/10">
          <Sidebar />
        </aside>

        <main className="flex-1 h-full py-[30px] md:py-0 md:mt-0 lg:ml-[256px] lg:py-0">
          <section className="pt-7 lg:pb-0 w-full flex flex-col gap-4 md:gap-7 lg:gap-4 mx-auto max-w-7xl">
            <div className="hidden lg:block px-8">
             <TopBar/>
            </div>
            {children}
          </section>
        </main>

        <div className="md:hidden fixed z-40 bottom-0 left-0 w-full">
          <MenuMobile />
        </div>
        
        </div>
      </body>
    </html>
  );
}
