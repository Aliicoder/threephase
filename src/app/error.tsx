"use client";
import "./globals.css";
import clsx from "clsx";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center h-screen">
      <h1
        className={clsx(
          "px-[20px] text-4xl font-bold text-center",
          "max-md:text-2xl"
        )}
      >
        Something went wrong
      </h1>
      <p className={clsx("px-[20px] text-xl text-center", "max-md:text-lg")}>
        {error.message}
      </p>
      <button
        onClick={reset}
        className={clsx(
          "mt-8 border border-blue-500 bg-blue-500 px-4 py-2 rounded cursor-pointer text-xl text-white",
          "max-md:text-sm"
        )}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
