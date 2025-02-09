import { GraphQLClient } from 'graphql-request';

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'http://headlesswp.local/graphql';

const graphQLClient = new GraphQLClient(endpoint);

export async function getPosts() {
  const query = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          slug
          excerpt
        }
      }
    }
  `;

  const data: {
    posts: {
      nodes: { id: string; title: string; slug: string; excerpt: string }[];
    };
  } = await graphQLClient.request(query);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const variables = { slug };
  const data: {
    post: {
      id: string;
      title: string;
      content: string;
      slug: string;
      featuredImage: { node: { sourceUrl: string } };
    };
  } = await graphQLClient.request(query, variables);
  return data.post;
}
