import Link from "next/link";
export default function ProductsPage() {
  return (
    <>
      <h1>Featured Products</h1>
      <Link href="/prodcts/1">Product 1</Link>
      <Link href="/prodcts/2">Product 2</Link>
      <Link href="/prodcts/3">Product 3</Link>
    </>
  );
}
