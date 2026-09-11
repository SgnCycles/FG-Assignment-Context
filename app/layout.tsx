import type { Metadata } from "next";
import { Fugaz_One, Work_Sans, Manrope } from "next/font/google";
import { UserProvider } from "@/context/userContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { FavouriteRecipeProvider } from "@/context/favouriteRecipeContext";
import { FavouriteCategoryProvider } from "@/context/favouriteCategoriesContext";
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

const manrope = Manrope({
  variable: "--font-manrope",
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
      className={`${fugaz_one.variable} ${work_sans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col m-0 bg-background">
        <UserProvider>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="colored"
          />
          <FavouriteCategoryProvider>
            <FavouriteRecipeProvider>
              <Header />
              {children}
              <Footer />
            </FavouriteRecipeProvider>
          </FavouriteCategoryProvider>
        </UserProvider>
      </body>
    </html>
  );
}