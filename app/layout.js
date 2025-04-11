import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Faisal Nawaz | Portfolio",
  description: "Over 5 years of experience in the frontend development field, I bring deep expertise in building responsive and user-focused web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics Tracking Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-133694823-1"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-133694823-1', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
