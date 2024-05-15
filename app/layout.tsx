import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "AI Image Editor",
  description: "Advanced AI-powered tools for one-click image restoration, generative filling, object removal ， recoloring, and background remove.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 检查 User-Agent 是否包含 Googlebot
  const isGooglebot = typeof window !== "undefined" && /Googlebot/.test(navigator.userAgent);

  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {!isGooglebot ? (
          <ClerkProvider appearance={{
            variables: { colorPrimary: '#624cf5' }
          }}>
            {children}
          </ClerkProvider>
        ) : (
          <>
            {children}
          </>
        )}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
