import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

/* If need font change here "Before that Added/Import Above" */
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',

  weight: ["400", "500", "600", "700",]
});
const ovo = Ovo({
  subsets: ["latin"],

  variable: '--font-ovo',
  weight: ["400",]
});



export const metadata = {
  title: "VivekYadav - Portfolio",
  description: "Eat. Code. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden min-h-screen flex flex-col`}
      >
        <main className="grow">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
