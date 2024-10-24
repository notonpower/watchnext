import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// フォントの設定を修正
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Watch Next",
  description: "Find what to watch next across streaming platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // basePathの設定
  const basePath = process.env.NODE_ENV === 'production' ? '/watchnext' : '';
  
  return (
    <html lang="ja" suppressHydrationWarning className="dark">
      <head>
        <link 
          rel="stylesheet" 
          href={`${basePath}/_next/static/css/app.css`}
          precedence="default"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}