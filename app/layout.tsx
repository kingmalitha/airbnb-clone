import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
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
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
