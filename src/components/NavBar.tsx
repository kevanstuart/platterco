"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const path = usePathname();

  const signUpLogicClasses = (path === '/search' || path === '/')
    ? "opacity-0"
    : "button-alternate";

  return (
    <div className="flex flex-wrap justify-end p-4 lg:justify-between">
      <nav className="text-xs text-indigo-800 items-center hidden lg:flex lg:gap-4">
        <Link href="/search" prefetch={false}>Find Developers</Link>
        <Link href="/#" prefetch={false}>Resources</Link>
      </nav>
      <div className="flex gap-4">
        <button className={signUpLogicClasses}>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
}