async function getData() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos`
    );
  
    return res.json();
  }
  
  export default async function SSR() {
    const data = await getData();
    return (
      <p className="mt-4 flex flex-col gap-4">
        {JSON.stringify(data)}
      </p>
    );
  }
  