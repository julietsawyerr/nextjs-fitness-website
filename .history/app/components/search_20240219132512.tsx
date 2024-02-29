'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {}

const Search = (props: Props) => {
    
    function handleSearch(term: string) {
        console.log(term);
      }

  return (
    <div className="relative flex flex-1 flex-shrink-0 my-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type='search'
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 patext-base outline-2 "
        placeholder='Search...'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}

export default Search