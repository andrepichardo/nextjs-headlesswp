import { getPostBySlug } from '@/lib/api';
import Image from 'next/image';

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="py-8 flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex flex-row gap-8 items-center">
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.title}
          width={800}
          height={400}
        />
        <div
          className="prose lg:prose-xl flex flex-col gap-3 text-justify"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Es necesario para renderizar el contenido HTML
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
