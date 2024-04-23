import { cache } from 'react';
import 'server-only';

import { getDeveloperSkills, getDeveloperType } from './utils';
import type { RandomUserResult, Developer, DeveloperUserResult } from './types';
import {
  USER_API_COUNT,
  USER_API_EXCL,
  USER_API_SEED,
  USER_API_URL
} from './constants';

function buildApiQuery(): string {
  const url = new URL(USER_API_URL);
  const searchParams = new URLSearchParams();

  searchParams.set('results', USER_API_COUNT.toString());
  searchParams.set('seed', USER_API_SEED);
  searchParams.set('exc', USER_API_EXCL.join(','));
  
  url.search = searchParams.toString();
  return url.toString();
}

export const preload = (): void => {
  void getUserData()
}

export const getUserData = cache(async () => {
  const url = buildApiQuery();
  const result = await fetch(url);
  const data = await result.json() as RandomUserResult;

  /**
   * Processing extra information not available in the response 
   */
  const addedTypeAndSkills: Array<Developer> = data.results.map((item, i) => {
    const dev: Developer = {
      ...item,
      skills: getDeveloperSkills(i),
      type: getDeveloperType(i)
    };
    return dev;
  });

  return {
    info: data.info,
    results: addedTypeAndSkills
  } as DeveloperUserResult;
});
