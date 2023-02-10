import React from 'react';
import { THead } from './THead';
import { FilterValue } from '@/hooks/useFilter';

import './Table.scss';
export type TableColumn<T> = {
  field: keyof T;
  icon: string | React.ReactNode;
  atribute: string;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  activeFilter: FilterValue<T>;
  toggleActiveFilter: (filter: keyof T) => void;
};

export const Table = <T extends { id: number }>({
  data,
  columns,
  activeFilter,
  toggleActiveFilter,
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
                activeFilterField={activeFilter}
                toggleActiveFilter={toggleActiveFilter}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={entry?.id || i}>
              {columns.map(({ field, icon, atribute }, i) => (
                <td data-label={columns[i].atribute} key={i}>
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
