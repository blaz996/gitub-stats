import { axios } from '@/lib/axios';
import { ProfilePreviewResponse } from '../types';

type ResponseData = {
  items: ProfilePreviewResponse[];
};

export const getProfiles = async (
  userName: string
): Promise<ProfilePreviewResponse[]> => {
  const { items } = await axios.get<never, ResponseData>(
    `search/users?q=${userName}&per_page=${100}`
  );
  console.log(items);
  return items;
};
