import { use } from "react";

async function getData() {
  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  );
  return {
    message: "About Page!",
  };
}

export default function Page() {
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
