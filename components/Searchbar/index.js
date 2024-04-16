import { useEffect } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
  Autocomplete,
  Stack,
  TextField,
} from '@mui/material';

import { sections } from '../../helpers/constants';

function Searchbar({ searchInputText, setSearchInputText }) {
  const router = useRouter();
  const { category } = router.query;

  function changeHandler(event, value) {
    setSearchInputText(value);
  }

  function getLabel(category) {
    const categoryLabel = sections.find(
      (section) => section.category === category
    )?.name;
    const label = category ? `${categoryLabel} durchsuchen` : "suchen";

    return label;
  }

  useEffect(() => {
    setSearchInputText("");
  }, [category]);

  return (
    <StyledStack>
      <Autocomplete
        disablePortal
        autoHighlight={true}
        freeSolo={true}
        id="search"
        value={searchInputText}
        autoComplete={false}
        onInputChange={changeHandler}
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label={getLabel(category)}
          />
        )}
      />
    </StyledStack>
  );
}
export default Searchbar;

const StyledStack = styled(Stack)`
  width: 100%;
  display: flex;
  max-width: 500px;
  @media (max-width: 550px) {
    width: 60% !important;
  }
`;
