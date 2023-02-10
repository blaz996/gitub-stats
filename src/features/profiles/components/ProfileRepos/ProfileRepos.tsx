import React from 'react';
import { MdFilterList } from 'react-icons/md';
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid';

import { FilterValue, useFilter } from '@/hooks/useFilter';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Table } from '@/components/Elements/Table/Table';
import { ContentLayout } from '@/components/layout';
import { RepoData } from '../../types';
import { Modal } from '@/components/Elements';
import { FilterList } from '@/components/Elements';
import { REPO_TABLE_COLUMNS_DATA } from '../../assets/data';
import { REPO_SELECT_FILTERS } from '../../assets/data';

import './ProfileRepos.scss';

export const ProfileRepos = ({ repos }: { repos: RepoData[] }) => {
  console.log(repos.length);
  const { isOpen: isModalOpen, close, open } = useDisclosure();
  const {
    activeFilter,
    selectFilterValue,
    toogleFilterValue,
    filteredData,
    toggleFilterAscending,
  } = useFilter<RepoData>(repos.slice(), {
    filterValue: 'name',
    ascending: true,
  });

  const handleFilterSelect = (filter: FilterValue<RepoData>) => {
    selectFilterValue(filter);
    close();
  };
  return (
    <ContentLayout>
      <div className='profile-repos'>
        <div className='profile-repos__heading'>
          <div className='profile-repos__heading-filter'>
            <MdFilterList onClick={open} className='heading-filter__btn' />
            <span onClick={toggleFilterAscending}>
              {activeFilter.filterValue}
            </span>
            {activeFilter.ascending ? (
              <ArrowSmallUpIcon />
            ) : (
              <ArrowSmallDownIcon />
            )}
          </div>
        </div>
        <Modal handleClose={close} show={isModalOpen} modalHeading='Sort by:'>
          <FilterList
            activeFilter={activeFilter}
            updateFilter={handleFilterSelect}
            filters={REPO_SELECT_FILTERS}
          />
        </Modal>
        <Table<RepoData>
          columns={REPO_TABLE_COLUMNS_DATA}
          data={filteredData}
          activeFilter={activeFilter}
          toggleActiveFilter={toogleFilterValue}
        />
      </div>
    </ContentLayout>
  );
};
