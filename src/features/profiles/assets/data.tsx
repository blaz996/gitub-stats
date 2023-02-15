import {
  UsersIcon,
  UserPlusIcon,
  StarIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  MapIcon,
} from '@heroicons/react/24/solid';
import { RiGitRepositoryLine } from 'react-icons/ri/';
import { TbGitFork } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';

import { ProfileData, RepoData } from '../types';
import { ATRIBUTE_CARD_COLORS } from '@/components/Elements/Card';
import { TableColumn } from '@/components/Elements';
import { SortT } from '@/hooks/useSort';

type ProfileAtributeData = {
  color: keyof typeof ATRIBUTE_CARD_COLORS;
  icon: React.ReactElement;
  label: string;
};

export const PROFILE_ATRIBUTES_DATA: ProfileAtributeData[][] = [
  [
    {
      icon: <UsersIcon />,
      color: 'green',
      label: 'Followers',
    },
    {
      icon: <UserPlusIcon />,
      color: 'purple',
      label: 'Following',
    },
  ],
  [
    {
      icon: <RiGitRepositoryLine />,
      color: 'blue',
      label: 'Repos',
    },

    {
      icon: <StarIcon />,
      color: 'yellow',
      label: 'Stars',
    },
  ],
];

type ProfileDetailData = {
  icon: React.ReactElement;
  detail: keyof ProfileData;
};

export const PROFILE_DETAILS_DATA: ProfileDetailData[] = [
  { icon: <UserCircleIcon className='detail__icon' />, detail: 'bio' },
  {
    icon: <BuildingOfficeIcon className='detail__icon' />,
    detail: 'company',
  },
  { icon: <MapIcon className='detail__icon' />, detail: 'location' },
];

export const REPO_TABLE_COLUMNS_DATA: TableColumn<RepoData>[] = [
  { field: 'name', icon: 'Name', atribute: 'Name' },
  { field: 'stargazers_count', icon: <FaStar />, atribute: 'Stars' },
  { field: 'forks', icon: <TbGitFork />, atribute: 'Forks' },
  { field: 'language', icon: <SiJavascript />, atribute: 'Language' },
];

export const REPO_SELECT_SORT_VALUES: {
  sort: SortT<RepoData>;
  label: string;
}[] = [
  {
    label: 'Name',
    sort: { value: 'name', ascending: true },
  },

  {
    label: 'Language',
    sort: { value: 'language', ascending: true },
  },
  {
    label: 'Stars',
    sort: { value: 'stargazers_count', ascending: true },
  },

  {
    label: 'Forks',
    sort: { value: 'forks', ascending: true },
  },
];
