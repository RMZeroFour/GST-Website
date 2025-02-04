import { Roboto_Flex } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { HeaderBar } from "./HeaderBar.js";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Gold Sterling Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <HeaderBar />
        </header>
        <main>
          {children}
          <Toaster position="bottom-center"/>
        </main>
      </body>
    </html>
  );
}
