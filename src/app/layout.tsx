import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Deployment Log",
  description: "A small log for tracking GitHub, Vercel, and Supabase learning milestones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
