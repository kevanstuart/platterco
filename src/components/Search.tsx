"use client"

import { redirect, useSearchParams } from "next/navigation";
import { DEVELOPER_TYPES } from "~/utils/constants";

export default function Search() {
  const searchParams = useSearchParams();

  function formHandler(formData: FormData) {
    const params = new URLSearchParams(searchParams);

    const { 
      "developer-type": type, 
      "developer-location": query 
    } = Object.fromEntries(formData);
    
    if (query) params.set("query", query.valueOf() as string);
    if (type) params.set("type", type.valueOf() as string);
    
    redirect(`/search${params.size > 0 ? "?" + params.toString() : ""}`);
  }

  return (
    <form action={formHandler} className="flex border border-white rounded">
      <div className="items-center px-2">
        <label htmlFor="select-developer-type" className="sr-only">Developer Type</label>
        <select
          id="select-developer-type"
          name="developer-type"
          className="border-none rounded-l-lg bg-indigo-700 py-2 text-xs text-white focus:outline-none"
          defaultValue={searchParams.get("type") ?? undefined}
        >
          {DEVELOPER_TYPES.map(type => <option key={type}>{type}</option>)}
        </select>
      </div>
      <label htmlFor="input-developer-location" className="sr-only">Developer Location</label>
      <input
        type="text"
        id="input-developer-location"
        name="developer-location"
        className="px-4 shadow-sm text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none grow min-w-64 text-gray-600"
        placeholder="e.g. United States"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <div className="flex items-center">
        <button 
          className="border-transparent text-white rounded-r-lg cursor-pointer"
          type="submit"
        >Search</button>
      </div>
    </form>
  );
}
