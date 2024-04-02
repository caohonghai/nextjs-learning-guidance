"use client";
import React, { useState, useEffect } from "react";

export default function CSR() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}`
        );
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      console.error(
        "An error occurred while fetching the data: ",
        e
      );
    });
  }, []);

  return (
    <p className="mt-4 flex flex-col gap-4">
      {data
        ? `Your data: ${JSON.stringify(data)}`
        : "Loading..."}
    </p>
  );
}
