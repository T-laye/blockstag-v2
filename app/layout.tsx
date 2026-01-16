import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../providers/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://blocstage.com"),
  title: {
    default: "Blocstage – Plan, Manage, and Grow Impactful Events",
    template: "%s | Blocstage",
  },
  description:
    "Blocstage is an all‑in‑one platform to plan, manage, and grow impactful events and communities with ease.",
  keywords: [
    "event management",
    "event planning software",
    "ticketing",
    "community management",
    "virtual events",
    "hybrid events",
    "conference software",
  ],
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/logo/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/logo/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/logo/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/logo/favicon.ico"],
  },
  openGraph: {
    type: "website",
    url: "https://blocstage.com",
    title: "Blocstage – Plan, Manage, and Grow Impactful Events",
    description:
      "Blocstage is an all‑in‑one platform to plan, manage, and grow impactful events and communities with ease.",
    siteName: "Blocstage",
    images: [
      {
        url: "/images/opengraph_preview.png",
        width: 1200,
        height: 630,
        alt: "Blocstage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blocstage",
    creator: "@blocstage",
    title: "Blocstage – Plan, Manage, and Grow Impactful Events",
    description:
      "Blocstage is an all‑in‑one platform to plan, manage, and grow impactful events and communities with ease.",
    images: ["/logo/primary.png"],
  },
  alternates: {
    canonical: "https://blocstage.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/logo/site.webmanifest"></link>
      </head>
      <body className={` antialiased`}>
        <ThemeProvider>
          {children}

          <Script
            id="json-ld-organization"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Blocstage",
              url: "https://blocstage.com",
              logo: "https://blocstage.com/images/logoorange.png",
              sameAs: [
                "https://twitter.com/blocstage",
                "https://www.facebook.com/blocstage",
                "https://www.linkedin.com/company/blocstage",
              ],
            })}
          </Script>
          <Script
            id="json-ld-website"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Blocstage",
              url: "https://blocstage.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://blocstage.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>
          <Script id="pwa-register" strategy="afterInteractive">
            {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
          `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
