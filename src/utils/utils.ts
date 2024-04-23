import {
  DEVELOPER_TYPES,
  DEVELOPER_SKILLS,
  DEV_DESCRIPTION_TAGS,
  DEV_DESCRIPTION
} from './constants';
import type {
  Developer,
  DeveloperType,
  DeveloperSkill,
  DescriptionParam,
  DescriptionTag,
  SearchParams
} from './types';

/**
 * Return 1 developer type per developer, resetting after the 
 * array limit has been reached.
 */
export function getDeveloperType(index: number): DeveloperType {
  const limit = DEVELOPER_TYPES.length;
  const key = index < limit ? index : index % limit;
  return DEVELOPER_TYPES[key]!;
}

/**
 * Returns n number of skills per developer in a circular fashion around
 * the array with differing lengths.
 */
export function getDeveloperSkills(index: number): Array<DeveloperSkill> {
  const maxSkills = DEVELOPER_SKILLS.length;
  const nrSkills = index < maxSkills ? index : index % maxSkills;

  const index1 = nrSkills;
  const index2 = (index1 + nrSkills) < maxSkills ? (index1 + nrSkills) : (index1 + nrSkills) % maxSkills;

  if (index1 <= index2) return DEVELOPER_SKILLS.slice(index1, index2 + 1);

  const slice1 = DEVELOPER_SKILLS.slice(index1);
  const slice2 = DEVELOPER_SKILLS.slice(0, index2);

  return slice1.concat(slice2);
}

/**
 * Inserts rng user data into the description
 */
export function getDescription(params: DescriptionParam): string {
  const regex = new RegExp(DEV_DESCRIPTION_TAGS.join('|'), 'gi');
  return DEV_DESCRIPTION.replace(regex, (match) => params[match as DescriptionTag]);
}

function checkStringFilter(param: string | Array<string>, item: string): boolean {
  return !!param && (item === undefined || !param?.includes(item));
}

function checkArrayFilter(param: string | Array<string>, items: Array<string>): boolean {
  return !!param && (
    items.length === 0 || !items.some(item => param.includes(item))
  );
}

export function filterDevelopers(data: Array<Developer>, params: SearchParams): Array<Developer> {
  if (Object.keys(params).length === 0) return data;

  return data.filter((item) => {
    // We only have 3 filters, so I will manually create the filters    
    return (
      !checkStringFilter(params.type!, item.type) &&
      !checkStringFilter(params.query!, item.location.country) &&
      !checkArrayFilter(params.skills!, item.skills)
    );
  });
}
