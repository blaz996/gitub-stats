import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { stat } from 'fs';
export const HomePage = () => {
  const selector = useAppSelector((state) => state.auth.currentAuthUser);
  return <div>HomePage</div>;
};
