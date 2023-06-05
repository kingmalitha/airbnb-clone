"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;

//! Why we do this?

//These 3rd party libraries are not always SSR compatible (Not optimize for Next.js). So we need to wrap them in a component and use dynamic import to load them only on the client side. They must in atleast have one 'client' parent.
