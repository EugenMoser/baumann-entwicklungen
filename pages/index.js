import Link from "next/link";

function Home() {
  return (
    <>
      <h1>hier kommt der Inhalt</h1>

      <Link href="/product/moebel">Möbelbereich</Link>
      <Link href="/product/halterung">Halterungen</Link>
      <Link href="/product/wasser">Wasserbereich</Link>
      <Link href="/product/lueftung">Lüftungsbereich</Link>
      <Link href="/product/elektro">Elektrobereich</Link>
    </>
  );
}
export default Home;
