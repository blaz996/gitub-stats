import { axios } from '@/lib/axios';
import { ProfilePreviewData } from '../types';

type ResponseData = {
  items: ProfilePreviewData[];
};

export const getProfiles = async (
  userName: string
): Promise<ProfilePreviewData[]> => {
  const { items } = await axios.get<never, ResponseData>(
    `search/users?q=${userName}&per_page=${100}`
  );
  console.log(items);
  return items;
};
