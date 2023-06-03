'use client';

import LoadingSpinner from '@/components/loading-spinner';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function SearchForm({ searchQuery }: { searchQuery: string }) {
  const router = useRouter();
  const searchParams = new URLSearchParams(window?.location.search);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          defaultValue={searchQuery}
          onChange={(e) => {
            if (e.target.value) {
              searchParams.set('q', e.target.value);
            } else {
              searchParams.delete('q');
            }
            const newUrl = `${
              window.location.pathname
            }?${searchParams.toString()}`;
            startTransition(() => {
              router.replace(newUrl);
            });
          }}
          className="block w-full rounded-md border-0 py-1.5 outline-none pr-7 pl-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-inherit focus:ring-2 focus:ring-emerald-500 sm:leading-6 text-gray-700"
          name="search"
          placeholder="Search"
        />
        {isPending && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <LoadingSpinner className="text-emerald-600" />
          </div>
        )}
      </div>
    </>
  );
}
