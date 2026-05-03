import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FundWatch – Get Alerts When Competitors Raise Funding",
  description: "Monitor Crunchbase, AngelList, and news sources to get instant alerts when your direct competitors announce funding rounds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eb06309d-2897-49f3-8632-53cbff5189ff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
