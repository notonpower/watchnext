import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch Next",
  description: "Find what to watch next across streaming platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* 本番環境用のスタイルパス修正 */}
        {process.env.NODE_ENV === 'production' && (
          <base href="/watchnext/" />
        )}
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}