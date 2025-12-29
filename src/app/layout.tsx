// app/layout.tsx
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Layan | Full Stack & AI Architect",
  description: "Portfolio of Muhammad Layan, Full Stack & AI Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Plus Jakarta Sans', 'sans-serif'],
                    mono: ['JetBrains Mono', 'monospace'],
                  },
                  colors: {
                    primary: '#D90429',
                    dark: '#0A0A0A',
                    obsidian: '#050505',
                  }
                }
              }
            }
          `,
          }}
        ></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root { --p: #D90429; }
            body { transition: background-color 0.5s ease; overflow-x: hidden; }
            .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
            .reveal.active { opacity: 1; transform: translateY(0); }
            .text-outline { -webkit-text-stroke: 1px var(--p); color: transparent; }
            .bg-mesh {
              background-image: radial-gradient(at 0% 0%, rgba(217, 4, 41, 0.1) 0px, transparent 50%),
                                radial-gradient(at 100% 100%, rgba(217, 4, 41, 0.05) 0px, transparent 50%);
            }
            .custom-scrollbar::-webkit-scrollbar { width: 5px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--p); border-radius: 10px; }
            @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
            .scanline { animation: scanline 4s linear infinite; }
          `,
          }}
        ></style>
      </head>
      <body
        className={`bg-white dark:bg-obsidian text-dark dark:text-neutral-200 antialiased selection:bg-primary selection:text-white custom-scrollbar ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}

        {/* Intersection Observer Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                entry.target.classList.add('active');
                const bar = entry.target.querySelector('.skill-bar-inner');
                if (bar) {
                  const targetWidth = bar.getAttribute('data-width');
                  bar.style.width = targetWidth;
                }
              }
            });
          }, { threshold: 0.15 });

          window.addEventListener('scroll-check', () => {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          });
          setTimeout(() => window.dispatchEvent(new CustomEvent('scroll-check')), 1000);
          setInterval(() => window.dispatchEvent(new CustomEvent('scroll-check')), 2000);
        `,
          }}
        ></script>
      </body>
    </html>
  );
}
