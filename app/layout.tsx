import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "siddhartha412 - The Minimal User | Developer Portfolio",
    template: "%s | siddhartha412",
  },
  description:
    "siddhartha412 (the minimal user) - Passionate developer crafting clean, minimal, and efficient digital experiences. Specializing in React, Python, JavaScript, Node.js, and modern web technologies with a focus on minimalist design and user experience.",
  keywords: [
    "siddhartha412",
    "the minimal user",
    "minimal developer",
    "web developer",
    "frontend developer",
    "React developer",
    "Python developer",
    "JavaScript",
    "Node.js",
    "portfolio",
    "minimal design",
    "minimalist portfolio",
    "UI/UX",
    "web development",
    "software engineer",
    "full stack developer",
    "clean code",
    "efficient development",
  ],
  authors: [{ name: "siddhartha412 (the minimal user)", url: "https://github.com/siddhartha412" }],
  creator: "siddhartha412",
  publisher: "siddhartha412",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-wc.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-wc.vercel.app",
    title: "siddhartha412 - The Minimal User | Developer Portfolio",
    description:
      "siddhartha412 (the minimal user) - Passionate developer crafting clean, minimal, and efficient digital experiences. Specializing in React, Python, JavaScript, and modern web technologies.",
    siteName: "siddhartha412 Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "siddhartha412 - The Minimal User Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "siddhartha412 - The Minimal User | Developer Portfolio",
    description:
      "siddhartha412 (the minimal user) - Passionate developer crafting clean, minimal, and efficient digital experiences.",
    images: ["/avatar.png"],
    creator: "@the.minimaluser",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#171717" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="siddhartha412" />
        <meta name="application-name" content="siddhartha412 Portfolio" />
        <meta name="msapplication-TileColor" content="#171717" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.lanyard.rest" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "siddhartha412 (the minimal user)",
              url: "https://portfolio-wc.vercel.app",
              image: "https://portfolio-wc.vercel.app/avatar.png",
              sameAs: [
                "https://github.com/siddhartha412",
                "https://www.instagram.com/the.minimaluser/",
                "https://discord.com/users/1261577588669939755",
              ],
              jobTitle: "Web Developer & Minimalist Designer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "Python",
                "JavaScript",
                "Node.js",
                "Frontend Development",
                "UI/UX Design",
                "Minimal Design",
                "Clean Code",
              ],
              description:
                "siddhartha412 (the minimal user) - Passionate developer crafting clean, minimal, and efficient digital experiences with focus on user-centered design.",
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
