"use client";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        Error()
      ) : (
        <button
          className="bg-red-400 px-4 py-2 rounded-md text-white"
          onClick={handleGetError}
        >
          Get Error
        </button>
      )}
    </>
  );
}
