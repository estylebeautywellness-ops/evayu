import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Eva Yu｜反霸凌行动工作台",
  description: "规划内容、记录校园公益行动，持续推动反霸凌对话。",
  icons: {
    icon: "/eva-yu-brand-logo.jpeg",
    shortcut: "/eva-yu-brand-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
