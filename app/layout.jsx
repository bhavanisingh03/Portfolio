import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import 'react-photo-view/dist/react-photo-view.css';

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Bhavani Singh | Portfolio",
  description: "Cybersecurity Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-primary text-white">
        
        <StairTransition />

        <Header />

        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}