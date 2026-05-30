import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Pankhaniya | Full Stack Developer | MERN Stack Engineer | AI Automation Specialist",
  description: "Experienced Full Stack Developer specializing in React.js, Next.js, Node.js, AI integrations, cloud deployment, DevOps, API management systems, SaaS applications, and automation solutions.",
  keywords: ["Vivek Pankhaniya", "Full Stack Developer", "MERN Stack Engineer", "AI Automation Specialist", "Next.js", "React.js", "Node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
