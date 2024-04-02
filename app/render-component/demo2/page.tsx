"use client";

import { useEffect, useState } from "react";

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
}

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = (await res.json()).slice(
      0,
      getRandomInt(1, 10)
    );
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {list.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button
        className="mt-4 bg-gradient-to-br max-w-fit from-[#5d58e6] to-[#dc5ae6] hover:from-[#dc5ae6] hover:to-[#5d58e6] px-4 py-2 rounded-md text-white"
        onClick={() => {
          location.reload();
        }}
      >
        Reload
      </button>
    </>
  );
}
