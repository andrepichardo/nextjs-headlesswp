import Link from 'next/link';
import React from 'react';

type Props = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
};

const PostCard = ({ id, title, excerpt, slug }: Props) => {
  return (
    <ul className="space-y-4">
      <li key={id} className="border p-4 rounded-md">
        <Link
          href={`/posts/${slug}`}
          className="text-xl text-blue-500 hover:underline"
        >
          {title}
        </Link>
        <div
          className="prose lg:prose-xl flex flex-col gap-3 text-justify"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Es necesario para renderizar el contenido HTML
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </li>
    </ul>
  );
};

export default PostCard;
