import { useEffect } from "react";

import { useRouter } from "next/router";
import styled from "styled-components";

// import { createFilterOptions } from "@material-ui/lab";
// import Autocomplete from "@mui/material/Autocomplete";
import { Autocomplete, Stack, TextField } from "@mui/material";

import { sections } from "../../helpers/constants";
// import TextField from "@mui/material/TextField";
import {
  findProductName,
  productsByCategory,
} from "../../helpers/services";

function Searchbar({ allProducts, searchInputText, setSearchInputText }) {
  const router = useRouter();
  const { category } = router.query;

  //display all products or searched products at autocomplete
  // const displayProducts =
  //   category && searchInputText
  //     ? productsByCategory(allProducts, category)
  //     : allProducts;

  function changeHandler(event, value) {
    setSearchInputText(value);
  }

  function getLabel(category) {
    const categoryLabel = sections.find(
      (section) => section.label === category
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
