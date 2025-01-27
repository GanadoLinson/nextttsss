import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
             
              <a href="/"className="text-2xl font-bold text-gray-800">Linson Pogi</a>
            
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            
              <a  href="/profile"className="text-gray-600 hover:text-gray-800">Profile</a>
            
             
              <a href="/about"className="text-gray-600 hover:text-gray-800">About</a>
            
            
              <a href="/profile/contact"className="text-gray-600 hover:text-gray-800">Contact</a>
            
            
           
          </div>
        </div>
      </div>
    </nav>
  

        {children}
      </body>
    </html>
  );
}
