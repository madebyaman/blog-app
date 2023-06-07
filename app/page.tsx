import { Suspense } from 'react';
import BlogPostList from './BlogPostList';
import SearchForm from './searchForm';
import LoadingSpinner from '@/components/loading-spinner';
import Heading from '@/components/heading';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = typeof searchParams.q === 'string' ? searchParams.q : '';

  return (
    <main className="">
      <div className="flex flex-col items-center gap-5">
        <Heading>My Blog</Heading>
        <div>
          <SearchForm searchQuery={searchQuery} />
        </div>
      </div>
      {/* @ts-expect-error Server component */}
      <BlogPostList searchQuery={searchQuery} />
    </main>
  );
}
