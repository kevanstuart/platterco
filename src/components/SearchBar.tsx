"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import Search from "./Search";

export default function SearchBar() {
  const path = usePathname();
  console.log(path);
  const showCrumb = !!(path === '/search' || path.includes('/profile'));

  return (
    <div className="flex flex-wrap gap-y-2 bg-indigo-700 text-white py-4 px-4 justify-between items-center">
      <div className="flex text-xs gap-2">
        <Link href="/">Home</Link>
        {showCrumb && <> <span>&gt;</span> <span>Find Developers</span></>}
      </div>
      <Search />
    </div>
  );
}