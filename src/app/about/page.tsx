export default async function Page() {
  const url = `https://catfact.ninja/fact`;

  const response = await fetch(url);
  const data = await response.json();

  return <div style={{ color: "white" }}>{data.fact}</div>;
}
