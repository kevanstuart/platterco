import Link from "next/link";
import type { ReactElement } from "react";

import { MAX_PER_PAGE } from "~/utils/constants";

type PaginationProps = {
  page: number;
  total: number;
};

function getPageLink(page: number, index: number): ReactElement {
  const content = index !== page
      ? <Link key={index} className="page-number" href={`/search?page=${index}`}>{index}</Link>
      : <span key={index} className="page-number bg-indigo-800 text-white">{index}</span>

  return content;
}

export default function Pagination({
  page, total
}: PaginationProps) {
  const numberOfPages = Math.ceil(total / MAX_PER_PAGE);

  const pageLinks = Array
    .from({ length: numberOfPages }, (_, i) => i+1)
    .map((i: number) => getPageLink(page, i));

  return (
    <div className="w-auto">
      <div className="flex border rounded text-indigo-800 text-sm divide-x pagination">
        {(page > 1) && <Link href={`/search?page=${page-1}`} className="rounded-l">Prev</Link>}
        <span>Page</span>
        {pageLinks.map(link => link)}
        {page < numberOfPages && <Link href={`/search?page=${page+1}`} className="rounded-r">Next</Link>}
      </div>
    </div>
  );
}
