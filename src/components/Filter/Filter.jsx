import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput type="text" value={value} onChange={onChangeFilter} />
  </FilterLabel>
);
