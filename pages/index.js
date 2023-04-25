import Link from "next/link";

function Home() {
  return (
    <>
      <h1>hier kommt der Inhalt</h1>

      <Link href="/moebel">Möbelbereich</Link>
      <Link href="/halterung">Halterungen</Link>
      <Link href="/wasser">Wasserbereich</Link>
      <Link href="/lueftung">Lüftungsbereich</Link>
      <Link href="/elektro">Elektrobereich</Link>
    </>
  );
}
export default Home;
