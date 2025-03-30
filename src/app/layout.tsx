import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'; // For notifications

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF to Markdown Converter",
  description: "Convert your PDF files to Markdown easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Basic Header - Can be replaced with a Compound Header component later */}
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <span className="text-xl font-bold text-primary">PDF2MD</span>
            {/* Add Login/Signup links or user profile later */}
          </nav>
        </header>
        <main className="container mx-auto p-4 min-h-[calc(100vh-120px)]">
            {children}
        </main>
         {/* Basic Footer */}
        <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PDF2MD Converter.
        </footer>
        <Toaster position="top-right" /> {/* Toast container */}
      </body>
    </html>
  );
}