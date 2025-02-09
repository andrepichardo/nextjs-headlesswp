import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to WordPress + Next.js + GraphQL
      </h1>
      <Link href="/posts" className="text-blue-500 text-xl hover:underline">
        View Posts
      </Link>
    </main>
  );
}
