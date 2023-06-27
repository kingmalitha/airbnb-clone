import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import Message from "./components/Message";

export const metadata = {
  //? The title and description are used by search engines to display your website.
  title: "RoamRental | airbnb Clone",
  description:
    "Discover exceptional accommodations worldwide with RoamRental. Book now!",
};

const font = Nunito({
  //? subsets means the languages that the font supports (latin means English)
  subsets: ["latin"], // Options: latin, latin-ext, cyrillic, cyrillic-ext, greek, greek-ext, vietnamese
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          {/* <Message /> */}
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
