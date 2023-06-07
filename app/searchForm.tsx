'use client';

import LoadingSpinner from '@/components/loading-spinner';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

function debounce(func: (this: unknown, ...arg: any[]) => void, wait: number) {
  let timeoutId: NodeJS.Timeout;

  return function (this: unknown, ...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export default function SearchForm({ searchQuery }: { searchQuery: string }) {
  const router = useRouter();
  const searchParams = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  );
  const [isPending, startTransition] = useTransition();

  function search(val: string) {
    if (val) {
      searchParams.set('q', val);
    } else {
      searchParams.delete('q');
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    startTransition(() => {
      router.replace(newUrl);
    });
  }

  const debouncedSearch = debounce(search, 300);

  return (
    <>
      <div className="relative">
        <input
          type="text"
          defaultValue={searchQuery}
          onChange={(e) => debouncedSearch(e.target.value)}
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
