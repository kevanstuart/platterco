import type { Developer, SearchParamProps } from "~/utils/types";
import { MAX_PER_PAGE } from "~/utils/constants";
import DeveloperItem from "~/components/Developer";
import Pagination from "~/components/Pagination";
import { filterDevelopers } from "~/utils/utils";
import { getUserData } from "~/utils/data";

export default async function Search({ searchParams }: SearchParamProps) {
  const result = await getUserData();

  // // Pagination calculation
  const page = Number(searchParams.page ?? 1);
  const end = page * MAX_PER_PAGE;
  const start = end - MAX_PER_PAGE;

  const data = filterDevelopers(result.results, searchParams);
  const developers = data.slice(start, end);
  
  return (
    <section className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-3xl w-full">Top developers in the United States</h2>
      <div className="flex flex-col gap-4">
        {developers.map((dev: Developer) => <DeveloperItem key={dev.email} developer={dev}/>)}
      </div>
      <Pagination page={page} total={result.info.results > data.length ? data.length : result.info.results } />
    </section>
  );
};
