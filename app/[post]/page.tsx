import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import BlogDate from '../BlogDate';
import Link from 'next/link';
import { PencilIcon } from '@heroicons/react/24/solid';
import Heading from '@/components/heading';

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
      <div className="flex justify-between items-center gap-2">
        <div className="space-y-2">
          <Heading>{blogPost.title}</Heading>
        </div>
        <div className="flex gap-4 mt-4">
          <Link
            href={`/${params.post}/edit`}
            className="bg-yellow-300 text-black items-center font-medium hover:opacity-70 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 inline-flex gap-1"
          >
            <PencilIcon className="w-4 h-4" />
            Edit
          </Link>
          <button className="text-red-600 hover:text-red-800 outline-none focus:ring-2 focus:ring-inset focus:ring-red-400 px-3 py-2">
            Delete
          </button>
        </div>
      </div>
      <span className="text-gray-500 text-sm">
        <i>posted on</i> <BlogDate date={blogPost.date} />
      </span>
      {/* <hr className="my-8 bg-black text-black" /> */}
      <div className="border-2 border-black p-4 mt-8">
        <article className="prose prose-yellow mx-auto">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
