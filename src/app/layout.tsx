// TODO: Point vivekpankhaniya.dev to this deployment on Vercel
// Register at: namecheap.com or domains.google.com (~$10/yr)
// Then update all canonical URLs and og:url to vivekpankhaniya.dev

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://vivekpankhaniya.vercel.app'),
  title: 'Vivek Pankhaniya | Full Stack Developer | MERN Stack & AI Specialist',
  description: 'Full Stack Developer from Ahmedabad specializing in MERN stack, Next.js, AI integrations, and enterprise API systems. Built automation saving 80% manual work.',
  verification: {
    google: 'google5c9e71caa08c52ab',
  },
  keywords: 'Vivek Pankhaniya, Full Stack Developer Ahmedabad, MERN Stack Developer, Next.js Developer India, AI automation developer, Node.js developer',
  authors: [{ name: 'Vivek Pankhaniya' }],
  creator: 'Vivek Pankhaniya',
  openGraph: {
    type: 'website',
    url: 'https://vivekpankhaniya.vercel.app',
    title: 'Vivek Pankhaniya | Full Stack Developer',
    description: 'I build scalable MERN apps, enterprise APIs, and AI automation systems. Currently at Actowiz Solutions.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vivek Pankhaniya - Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Pankhaniya | Full Stack Developer',
    description: 'MERN Stack Engineer & AI Automation Specialist from Ahmedabad, India.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://vivekpankhaniya.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Person Schema */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vivek Pankhaniya",
              "jobTitle": "Full Stack Developer",
              "url": "https://vivekpankhaniya.vercel.app",
              "email": "pankhaniyavivek10@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/vivekpankhaniya",
                "https://www.linkedin.com/in/vivek-pankhaniya-011556223/"
              ],
              "knowsAbout": ["React.js", "Next.js", "Node.js", "MongoDB", "AI Integration", "AWS", "Docker"]
            })
          }}
        />
        {/* JSON-LD FAQPage Schema */}
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What technologies do you specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js for scalable web applications. I also have strong expertise in AI integration (OpenAI/Gemini APIs) and DevOps (AWS, Docker, CI/CD)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you available for freelance work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I take on select freelance projects that align with my expertise in Full Stack Development, SaaS architecture, and AI automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is your approach to building enterprise APIs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I focus on security, scalability, and performance. This includes robust authentication (OAuth/JWT), rate limiting, comprehensive error handling, and optimized database queries."
                  }
                }
              ]
            })
          }}
        />
      </head>
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
