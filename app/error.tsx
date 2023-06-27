"use client";

import { use, useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <EmptyState
      title='Oops ... Something Went Wrong!'
      subtitle='If you experience login errors or no places are displayed on the homepage, it might be due to an inactive MongoDB database cluster. Please contact me at contact.malithasandaruwan@gmail.com for assistance.'
    />
  );
};

export default ErrorState;
