import Link from "next/link";

function Home() {
  return (
    <>
      <h1>hier kommt der Inhalt</h1>
      <Link
        href="/moebel"
        aria-label="zum Möbelbereich"
      >
        Möbelbereich
      </Link>
    </>
  );
}
export default Home;
