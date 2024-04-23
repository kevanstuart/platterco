import Image from "next/image";

import { DEV_EXPERIENCE, DEVELOPER_SERVICES } from "~/utils/constants";
import type { Developer } from "~/utils/types";
import { getDescription } from "~/utils/utils";
import { getUserData } from "~/utils/data";
import Connect from "~/components/Connect";
import Dialog from "~/components/Dialog";
import Contact from "~/components/Contact";

type ProfileProps = {
  params: {
    name: string;
  }
}

type HeaderProps = {
  name: string;
  skill: string;
  type: string;
  location: string;
}

type HeroProps = {
  name: string;
  picture: string;
  description: string;
}

function Header({ name, skill, type, location }: HeaderProps) {
  return (
    <header>
      <h1 className="text-gray-700">{name}</h1>
      <div className="flex text-gray-400 gap-4">
        <small>{skill}, {type.toLocaleLowerCase()}</small>
        <small>&rarr; {location}</small>
      </div>
    </header>
  );
}

function Hero({ name, picture, description }: HeroProps) {
  return (
    <div className="pb-6 flex gap-6 border-b border-gray-300">
      <Image
        src={picture}
        alt={name}
        width={128}
        height={128}
        className="min-w-32"
      />
      <p>{description}</p>
    </div>
  );
}

type ServicesProps = {
  name: string,
  services: Array<string>
};

function ServicesList({ name, services }: ServicesProps) {
  return (
    <div className="flex flex-col lg:border-b">
      <p className="font-bold text-gray-600 text-xl lg:text-base">{name} can help you with:</p>
      <div className="flex flex-col gap-2 text-gray-600 py-6">
        {services.map(service => <span key={service}>&rarr; {service}</span>)}
      </div>
    </div>
  );
}

export default async function Profile({ params }: ProfileProps) {
  const result = await getUserData();
  const developerName = decodeURIComponent(params.name);
  const developer: Developer | undefined = result.results.find(
    developer => developerName === `${developer.name.first} ${developer.name.last}`
  );

  if (!developer) {
    return null;
  }

  const location = `${developer?.location.city}, ${developer?.location.country}`;
  const description = getDescription({
    "{{name}}": developer.name.first,
    "{{type}}": developer.type
  });

  return (
    <section className="max-w-screen-lg m-auto p-8 px-10 flex flex-col gap-6">
      <Header
        name={developerName}
        skill={developer.skills[0]!}
        type={developer.type}
        location={location}
      />
      <Hero
        name={developerName}
        picture={developer.picture.large}
        description={description}
      />
      <div className="flex divide-x divide-gray-300">
        <div className="flex flex-col gap-4 pr-6">
          <div className="lg:hidden">
            <ServicesList name={developer.name.first} services={DEVELOPER_SERVICES} />
          </div>

          <h2 className="text-xl font-bold text-gray-600">Experience</h2>
          {DEV_EXPERIENCE.map(item =>
            <div className="flex flex-col gap-2" key={item.title}>
              <h4 className="font-semibold text-lg text-gray-600 pt-4">{item.title}</h4>
              {item.points.map((point, i) => (
                <p key={i} className="text-gray-600">* {point}</p>
              ))}
            </div>
          )}
        </div>
        <div className="w-full basis-3/12 shrink-0 grow-0 px-6 lg:basis-64">
          <Connect />
          <div className="hidden lg:block py-8">
            <ServicesList name={developer.name.first} services={DEVELOPER_SERVICES} />
          </div>
        </div>
      </div>
      <Dialog title={developerName}>
        <Contact />
      </Dialog>
    </section>
  );
};
