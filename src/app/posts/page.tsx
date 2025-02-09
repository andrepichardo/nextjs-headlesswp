import { getPosts } from '@/lib/api';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-md">
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
