import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import BlogDate from '../BlogDate';
import Link from 'next/link';
import { PencilIcon } from '@heroicons/react/24/outline';

const blogPost = {
  title: 'My first blog post',
  uuid: 'my-first-blog-post',
  date: '2023-06-02T17:39:57.311Z',
  content:
    "Hello world! This is my first blog post.  I hope you like it. I'm going to write a lot more soon.",
};

export default function BlogPost({ params }: { params: { post: string } }) {
  return (
    <main>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold text-gray-700">
          {blogPost.title}
        </h1>
        <span className="text-gray-500 text-sm">
          <i>posted on</i> <BlogDate date={blogPost.date} />
        </span>
        <div className="flex gap-4 mt-4">
          <Link
            href={`/${params.post}/edit`}
            className="rounded-md bg-emerald-600 items-center text-white font-medium shadow-sm hover:bg-emerald-500 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 inline-flex gap-1"
          >
            <PencilIcon className="w-4 h-4" />
            Edit
          </Link>
          <button className="text-red-600 hover:text-red-800 outline-none focus:ring-2 focus:ring-inset focus:ring-red-400 rounded-md px-3 py-2">
            Delete
          </button>
        </div>
      </div>
      <hr className="my-8" />
      <article className="prose prose-emerald mx-auto">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </article>
    </main>
  );
}