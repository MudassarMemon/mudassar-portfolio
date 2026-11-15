import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mudassar Memon · Full-stack engineer",
  description:
    "Full-stack engineer with a test-automation background. React, Next.js, TypeScript and Playwright. Open to full-stack, SDET and forward-deployed roles.",
  twitter: { card: "summary" },
  openGraph: {
    title: "Mudassar Memon · Full-stack engineer",
    description: "React, Next.js, TypeScript and Playwright. Open to full-stack, SDET and forward-deployed roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
