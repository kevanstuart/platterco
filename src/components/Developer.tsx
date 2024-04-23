import Image from "next/image";
import Link from "next/link";

import type { Developer } from "~/utils/types";
import { getDescription } from "~/utils/utils";

const linkClasses = `
  button button-alternate text-center text-indigo-800 basis-full
  text-sm md:basis-1/6
`;

export default function DeveloperItem(
  { developer }: { developer: Developer }
): JSX.Element {
  const fullName = `${developer.name.first} ${developer.name.last}`;
  const description = getDescription({
    "{{name}}": developer.name.first,
    "{{type}}": developer.type
  });

  return (
    <article className="bg-white shadow-md shadow-gray-200 p-6 flex flex-wrap items-start justify-between gap-y-4">
      <Image
        src={developer.picture.large}
        alt={fullName}
        width={128} height={128}
        className="border border-gray-200 max-w-32 sm:basis-1/6 shrink-0 grow-0"
      />
      <div className="px-4 basis-5/6 md:basis-4/6 md:px-6">
        <h3 className="text-xl leading-none">{fullName}</h3>
        <p className="text text-gray-500 py-2">{description}</p>
      </div>
      <Link
        href={`/profile/${encodeURIComponent(fullName)}`}
        className={linkClasses}
      >View profile</Link>
    </article>
  );
};