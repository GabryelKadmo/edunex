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
  title: "Edunex",
  description: "Edunex - Encontre cursos gratuitos com certificado e conteúdo para desenvolvimento pessoal e profissional.",
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
        <aside className="fixed hidden lg:block bg-white h-screen w-full max-w-[256px] z-30">
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

        <div className="md:hidden fixed z-50 bottom-0 left-0 w-full">
          <MenuMobile />
        </div>
        
        </div>
      </body>
    </html>
  );
}
