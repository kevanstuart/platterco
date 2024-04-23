import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p>
          This is a placeholder page, please use the search function 
          or go to <Link href="/search" className="text-indigo-800">Find Developers</Link>
      </p>
    </div>
  );
}
