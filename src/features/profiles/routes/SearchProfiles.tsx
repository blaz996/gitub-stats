import React, { useState } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { ProfilePreview, ProfilesList } from '../components';
import { useProfiles } from '../hooks/useProfiles';
import { Pagination } from '@/components/Elements';

export const SearchProfiles = () => {
  const [searchValue, setSearchValue] = useState('');
  const {
    isLoading,
    searchProfiles,
    activePageIndex,
    setActivePageIndex,
    isSuccess,
    profilesData,
  } = useProfiles();

  const activePage = React.useMemo(
    () => (profilesData.length !== 0 ? profilesData[activePageIndex] : []),
    [profilesData, activePageIndex]
  );

  const handleSubmit = () => {
    searchProfiles(searchValue);
    setActivePageIndex(0);
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        updateSearchValue={setSearchValue}
        isLoading={isLoading}
      />
      <ProfilesList data={activePage} isSuccess={isSuccess} />

      <Pagination
        data={profilesData}
        activePageIndex={activePageIndex}
        updateActivePageIndex={setActivePageIndex}
      />
    </>
  );
};
