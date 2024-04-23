import type { Metadata } from "next";

import type { LayoutProps } from "~/utils/types";
import SearchBar from "~/components/SearchBar";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import { preload } from "~/utils/data";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Home Page | Platter Tech Challenge",
  description: "Generally, some useful content is available for this section.",
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  preload();

  return (
    <html lang="en">
      <body className="w-screen">
        <NavBar />
        <SearchBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
