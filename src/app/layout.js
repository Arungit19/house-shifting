import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactButtons from "../components/ContactButtons";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy To Go",
  description: "Professional House Shifting Service",
  icons: {
    icon: "/favicon.ico", // ✅ main favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* 🔥 FORCE favicon (fixes caching issue) */}
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>

      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <ContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}