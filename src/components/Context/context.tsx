import { createContext } from 'react';
import { TFilterContext } from './type';

export const FilterContext = createContext<TFilterContext>({
  state: false,
  setState: (_) => {},
});
