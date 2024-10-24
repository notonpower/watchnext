// src/app/[type]/[id]/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Next - 詳細",
  description: "作品詳細ページ",
};

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}