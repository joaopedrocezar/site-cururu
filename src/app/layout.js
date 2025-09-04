import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Sapo-Cururu: Dossiê Biológico",
  description: "Um site completo com informações detalhadas sobre o Sapo-Cururu (Rhinella marina).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
