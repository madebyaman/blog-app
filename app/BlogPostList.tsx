import Link from 'next/link';
import BlogDate from './BlogDate';
import { connect } from '@/lib/drizzle';
import { posts } from '@/db/schema';
import { like } from 'drizzle-orm';

async function getBlogPosts(searchQuery: string) {
  try {
    const db = await connect();
    const allPosts = searchQuery
      ? db
          .select()
          .from(posts)
          .where(like(posts.title, `%${searchQuery}%`))
      : db.select().from(posts);
    return allPosts;
  } catch (err) {
    console.log(err);
  }
}

export default async function BlogPostList({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const blogPosts = await getBlogPosts(searchQuery);

  return (
    <>
      {searchQuery && (
        <p className="text-sm text-gray-500 mt-4">
          Searching for <strong>{searchQuery}</strong>. Found{' '}
          <strong>{blogPosts?.length} posts</strong>
        </p>
      )}
      <ul className="mt-4 space-y-3">
        {blogPosts?.map((post) => (
          <li
            key={post.id}
            className="flex flex-col gap-2 border-2 border-black p-2"
          >
            <Link
              href={`/${post.id}`}
              className="self-start border-b-4 border-emerald-300 hover:bg-emerald-100 transition-all px-1 pt-1 text-lg font-medium"
            >
              {post.title}
            </Link>
            <span>
              <i className="text-sm">posted on</i>{' '}
              <BlogDate date={post.created_at} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
