import Link from "next/link";
import { DEVELOPER_TYPES, FOOTER_LINKS } from "~/utils/constants";

type ListProps = {
  title: string;
  data: Array<string>;
  fake?: boolean;
}

function FooterList({ title, data, fake = false }: ListProps) {
  return (
    <div className="basis-full sm:basis-1/2 flex-none lg:basis-auto lg:flex-1">
      <h6>{title}</h6>
      <p className="flex flex-col py-4 gap-2">
        {data.map(
          type => <Link
            key={type}
            href={!fake ? `/search?type=${type}` : "/"}
            className="text-indigo-800"
          >
            {type}
          </Link>
        )}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="container p-8 max-w-screen-lg">
      <div className="flex flex-wrap lg:justify-evenly items-start gap-y-4">
        <h6 className="hidden lg:basis-auto lg:flex-1 lg:block">Developer Search</h6>
        <FooterList title="Highest Demand Talents" data={DEVELOPER_TYPES} />
        <FooterList title="About" data={FOOTER_LINKS} fake={true} />
        <button className="text-sm basis-1/3 lg:flex-1 lg:basis-auto">Sign Up</button>
      </div>
    </footer>
  );
}