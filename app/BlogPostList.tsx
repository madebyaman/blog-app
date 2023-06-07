import Link from 'next/link';
import BlogDate from './BlogDate';

async function getBlogPosts(searchQuery: string) {
  const blogPosts = [
    {
      title: 'My first blog post',
      uuid: 'my-first-blog-post',
      date: '2023-06-02T17:39:57.311Z',
    },
  ];

  return new Promise<typeof blogPosts>((resolve) => {
    setTimeout(() => {
      resolve(blogPosts.filter((post) => post.title.includes(searchQuery)));
    }, 3000);
  });
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
          <strong>{blogPosts.length} posts</strong>
        </p>
      )}
      <ul className="mt-4 space-y-3">
        {blogPosts?.map((post) => (
          <li
            key={post.uuid}
            className="flex flex-col gap-2 border-2 border-black p-2"
          >
            <Link
              href={`/${post.uuid}`}
              className="self-start border-b-4 border-yellow-300 hover:bg-yellow-100 transition-all px-1 pt-1 text-lg font-medium"
            >
              {post.title}
            </Link>
            <span>
              <i className="text-sm">posted on</i> <BlogDate date={post.date} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
