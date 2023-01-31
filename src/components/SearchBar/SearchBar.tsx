import z from 'zod';
import { AiOutlineSearch } from 'react-icons/ai';

import { Form, InputField } from '../Form';
import { Spinner } from '../Elements';

import './SearchBar.scss';

type SearchBarValues = {
  searchValue: string;
};

type SearchBarProps = {
  updateSearchValue: (searchValue: string) => void;
  isLoading?: boolean;
  handleSubmit: (userName: string) => void;
};

export const SearchBar = ({
  isLoading,
  handleSubmit,
  updateSearchValue,
}: SearchBarProps) => {
  const schema = z.object({
    searchValue: z.string().min(1, 'Please enter a username'),
    /*
      .superRefine((val, ctx) => {
        if (isEmpty) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Fuck you',
          });
        }
      }),
      */
  });

  return (
    <div className='search-bar'>
      <Form<SearchBarValues, typeof schema>
        onSubmit={(values) => handleSubmit(values['searchValue'])}
        schema={schema}
        options={{ mode: 'onSubmit', reValidateMode: 'onSubmit' }}
        id='search-bar'
      >
        {({ register, formState }) => {
          return (
            <>
              <InputField
                placeholder='Enter a username'
                error={formState.errors['searchValue']}
                registration={register('searchValue', {
                  onChange: (e) => updateSearchValue(e.target.value),
                })}
                className='search-bar--input'
              />
              <button
                type='submit'
                className='search-bar__button'
                style={{ right: isLoading ? '8%' : '2%' }}
              >
                <AiOutlineSearch />
              </button>
            </>
          );
        }}
      </Form>

      {isLoading && <Spinner size='small' className='spinner--search-bar' />}
    </div>
  );
};
