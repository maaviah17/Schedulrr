import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "Schedulrr",
  description: "Meeting scheduling next app",
};

const inter = Inter({subsets : ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className={inter.className}>
      <body 
        
      >
        {/* header here */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {children}
        </main>
        {/* footer here */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-14 text-center text-gray-600">
            <p> Made with ❤️ by MMK </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
