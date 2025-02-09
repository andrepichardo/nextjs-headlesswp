import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/api';
export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
