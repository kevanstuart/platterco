import * as React from "react";
import type { Metadata } from "next";

import FilterForm from "~/components/FilterForm";
import type { LayoutProps } from "~/utils/types";

export const metadata: Metadata = {
  title: "Search Page | Platter Tech Challenge",
  description: "Generally, some useful content is available for this section.",
};


export default function SearchLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-wrap items-start bg-gray-100 w-screen justify-between lg:flex-nowrap">
      <FilterForm />
      {children}
    </div>
  );
}