import React from 'react';
import { MdFilterList } from 'react-icons/md';
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid';

import { SortT, useSort } from '@/hooks/useSort';
import { useDisclosure } from '@/hooks/useDisclosure';

import { Modal, SortList, Table } from '@/components/Elements';
import { ContentLayout } from '@/components/layout';
import { RepoData } from '../../types';

import {
  REPO_TABLE_COLUMNS_DATA,
  REPO_SELECT_SORT_VALUES,
} from '../../assets/data';

import './ProfileRepos.scss';

export const ProfileRepos = ({ repos }: { repos: RepoData[] }) => {
  const { isOpen: isModalOpen, close, open } = useDisclosure();
  const {
    activeSort,
    selectSortValue,
    toggleSortValue,
    sortedData,
    toggleSortAscending,
  } = useSort<RepoData>(repos.slice(), {
    value: 'name',
    ascending: true,
  });

  const handleSortSelect = (sort: SortT<RepoData>) => {
    selectSortValue(sort);
    close();
  };
  return (
    <ContentLayout>
      <div className='profile-repos'>
        <div className='profile-repos__heading'>
          <div className='profile-repos__heading-sort'>
            <MdFilterList onClick={open} className='heading-sort__btn' />
            <span className='selection--off ' onClick={toggleSortAscending}>
              {activeSort.value}
            </span>
            {activeSort.ascending ? (
              <ArrowSmallUpIcon />
            ) : (
              <ArrowSmallDownIcon />
            )}
          </div>
        </div>
        <Modal handleClose={close} show={isModalOpen} modalHeading='Filter by:'>
          <SortList
            activeSort={activeSort}
            updateSort={handleSortSelect}
            sortValues={REPO_SELECT_SORT_VALUES}
          />
        </Modal>
        <Table<RepoData>
          columns={REPO_TABLE_COLUMNS_DATA}
          data={sortedData}
          activeSort={activeSort}
          toggleActiveSort={toggleSortValue}
        />
      </div>
    </ContentLayout>
  );
};
