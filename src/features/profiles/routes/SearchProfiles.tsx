import React, { useState } from 'react';

import { SearchBar } from '@/components/SearchBar';
import { ProfilePreview, ProfilesList } from '../components';
import { useProfiles } from '../hooks/useProfiles';
import { Pagination } from '@/components/Elements';
import { ContentLayout } from '@/components/layout';
import { ProfilePreviewData } from '../types';

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

  console.log(activePage);
  const handleSubmit = () => {
    searchProfiles(searchValue);
    setActivePageIndex(0);
  };

  return (
    <ContentLayout bgColor='grey'>
      <SearchBar
        handleSubmit={handleSubmit}
        updateSearchValue={setSearchValue}
        isLoading={isLoading}
      />
      <ProfilesList
        listLength={activePage.length}
        listFetched={isSuccess}
        emptyListMsg='No profiles found'
      >
        {activePage.map((profile) => (
          <ProfilePreview key={profile.id} profile={profile} />
        ))}
      </ProfilesList>

      <Pagination<ProfilePreviewData>
        data={profilesData}
        activePageIndex={activePageIndex}
        updateActivePageIndex={setActivePageIndex}
      />
    </ContentLayout>
  );
};
