"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-2xl">Something went wrong!</h2>
      <button
        className="bg-blue-400 mt-4 px-4 py-2 rounded-md text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
