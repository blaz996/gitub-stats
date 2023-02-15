import React from 'react';
import { THead } from './THead';
import { SortT } from '@/hooks/useSort';

import './Table.scss';
export type TableColumn<T> = {
  field: keyof T;
  icon: string | React.ReactNode;
  atribute: string;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  activeSort: SortT<T>;
  toggleActiveSort: (filter: keyof T) => void;
};

export const Table = <T extends { id: number }>({
  data,
  columns,
  activeSort,
  toggleActiveSort,
}: TableProps<T>) => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead className='table__head'>
          <tr>
            {columns.map((col, i) => (
              <THead<T>
                key={i}
                value={col}
                activeSort={activeSort}
                toggleActiveSort={toggleActiveSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={entry?.id || i}>
              {columns.map(({ field, icon, atribute }, i) => (
                <td data-label={atribute} key={i}>
                  {entry[field] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
