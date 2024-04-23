// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { DEVELOPER_SKILLS, DEVELOPER_TYPES, DEV_DESCRIPTION_TAGS } from "./constants";

export type RandomUserName = {
  title: string;
  first: string;
  last: string;
};

export type RandomUserLocation = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: number;
    longitude: number;
  },
  timezone: {
    offset: number;
    description: string;
  }
};

export type RandomUserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
}

export type RandomUserData = {
  gender: string;
  name: RandomUserName;
  location: RandomUserLocation;
  email: string;
  picture: RandomUserPicture;
  nat: string;
};

export type RandomUserInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type RandomUserResult = {
  results: Array<RandomUserData>;
  info: RandomUserInfo;
};

export type DeveloperType = typeof DEVELOPER_TYPES[number];
export type DeveloperSkill = typeof DEVELOPER_SKILLS[number];

export type Developer = RandomUserData & {
  skills: Array<string>;
  type: string;
};

export type DeveloperUserResult = {
  results: Array<Developer>,
  info: RandomUserInfo
}

export type DescriptionTag = typeof DEV_DESCRIPTION_TAGS[number];
export type DescriptionParam = Record<DescriptionTag, string>;

export type LayoutProps = {
  children: React.ReactNode
}

export type SearchParams = Record<string, string | Array<string> | undefined>;
export type SearchParamProps = {
  searchParams: SearchParams
}