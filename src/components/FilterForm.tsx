"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DEVELOPER_SKILLS, DEVELOPER_TYPES } from "~/utils/constants";

type CheckBoxProps = {
  type: string;
  allowMultiple: boolean;
  value: string;
}

type FilterFieldSetProps = {
  type: string;
  title: string;
}

function CheckBoxList({ type, value }: CheckBoxProps) {
  const id = `${type}-${value.toLocaleLowerCase().replace(" ", "-")}`;

  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  function onChange(e: EventTarget) {
    const element = e as HTMLInputElement;

    const queryParams = typeof window !== undefined
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

    if (!element.checked) {
      queryParams.delete(element.name, element.value);
    } else {
      queryParams.append(element.name, element.value);
    }

    void router.push(`${path}?${queryParams.toString()}`);
  };

  function checkHandler(type: string, value: string): boolean {
    const parameterValues = params.getAll(type);
    return parameterValues.includes(value)
  }

  return (
    <div className="flex h-6 gap-1 items-center">
      <input
        id={id}
        value={value}
        name={type}
        type="checkbox"
        defaultChecked={checkHandler(type, value)}
        onChange={(e) => onChange(e.target)}
      />
      <label htmlFor={id} className="text-sm text-gray-900">{value}</label>
    </div>
  );
}

function CheckBoxWrapper({ data, type }: { data: Array<string>, type: string }) {
  return (
    <div className="relative grid grid-cols-2 gap-x-3 gap-y-2 pt-4">
      {data.map(
        (item) => <CheckBoxList 
          key={item}
          type={type}
          value={item}
          allowMultiple={type === "skill"} 
        />
      )}
    </div>
  );
}

function FilterFieldSet({ type, title }: FilterFieldSetProps) {
  const data = type === "type" ? DEVELOPER_TYPES : DEVELOPER_SKILLS;

  return (
    <fieldset>
      <h6>{title}</h6>
      <CheckBoxWrapper data={data} type={type} />
    </fieldset>
  );
}

export default function FilterForm() {
  return (
    <form className="bg-white grow-0 shrink-0 basis-full lg:basis-96">
      <FilterFieldSet type="type" title="Developer Type:" />
      <FilterFieldSet type="skill" title="Skills:" />
    </form>
  );
}