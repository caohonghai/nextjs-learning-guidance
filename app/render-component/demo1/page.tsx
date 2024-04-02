export default async function Page() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = (await res.json()).slice(0, 10);
  
    return (
      <ul>
        {data.map(
          ({ title, id }: { title: string; id: string }) => {
            return <li key={id}>{title}</li>;
          }
        )}
      </ul>
    );
  }
  