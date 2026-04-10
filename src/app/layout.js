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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <ContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}