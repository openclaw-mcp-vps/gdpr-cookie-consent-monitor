import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Consent Monitor – Stay Compliant Automatically",
  description: "Scan websites for cookie compliance, track consent rates, get alerts on violations, and generate GDPR compliance reports automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d2f1f60-415e-468f-9578-2b185271431e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
