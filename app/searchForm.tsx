'use client';

import LoadingSpinner from '@/components/loading-spinner';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
          className="block w-full py-1.5 outline-none pr-7 pl-3 bg-white placeholder:text-gray-400 bg-inherit focus:ring focus:ring-yellow-300 sm:leading-6 text-gray-800"
          name="search"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 pr-3 bg-yellow-300 grid place-content-center p-2 text-black">
          {isPending ? (
            <div className="pointer-events-none flex items-center">
              <LoadingSpinner className="" />
            </div>
          ) : (
            <button className="grid place-content-center">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
