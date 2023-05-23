import { AppContextProvider } from "@/context/AppContext";
import { Inter } from "next/font/google";
import ChildLayout from "./child-layout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antoni - My Book Shelf",
  description: "This is a meta description. Welcome to My Book Shelf",
  generator: "Next.js",
  applicationName: "My Book Shelf",
  referrer: "origin-when-cross-origin",
  keywords: ["My Book Shelf", "Lintang", "Luthfiantoni"],
  authors: [
    {
      name: "Lintang Luthfiantoni",
      url: "https://www.linkedin.com/in/lintang-luthfiantoni-4747a61ab/",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <ChildLayout>{children}</ChildLayout>
        </AppContextProvider>
      </body>
    </html>
  );
}
