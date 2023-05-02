import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  //? The title and description are used by search engines to display your website.
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  //? subsets means the languages that the font supports (latin means English)
  subsets: ["latin"], // Options: latin, latin-ext, cyrillic, cyrillic-ext, greek, greek-ext, vietnamese
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
