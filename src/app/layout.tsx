import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NO-CONTACT s.r.o.",
  description: "Oficiální stránka ruční myčky a detailingu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7L3VBNXWM0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7L3VBNXWM0');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}