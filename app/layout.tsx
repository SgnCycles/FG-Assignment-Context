import type { Metadata } from "next";
import { Fugaz_One, Work_Sans } from "next/font/google";
import { UserProvider } from "@/context/userContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fugaz_one = Fugaz_One({
  variable: "--font-fugaz-one",
  weight: "400",
  subsets: ["latin"],
});

const work_sans = Work_Sans({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savor",
  description: "Choose your next meal",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fugaz_one.variable} ${work_sans.variable} h-full antialiased`}
    >
      <UserProvider>
        <body className="h-screen flex flex-col m-0 bg-background">
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}