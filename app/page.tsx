import { Suspense } from 'react';
import BlogPostList from './BlogPostList';
import SearchForm from './searchForm';
import LoadingSpinner from '@/components/loading-spinner';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = typeof searchParams.q === 'string' ? searchParams.q : '';

  return (
    <main className="">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold text-gray-700">My Blog</h1>
        <div>
          <SearchForm searchQuery={searchQuery} />
        </div>
      </div>
      {/* @ts-expect-error Server component */}
      <BlogPostList searchQuery={searchQuery} />
    </main>
  );
}
