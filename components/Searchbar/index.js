import { useEffect, useState } from "react";

import { useRouter } from "next/router";

// import { createFilterOptions } from "@material-ui/lab";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import {
  findProductName,
  productsByCategory,
} from "../../helpers/services";

function Searchbar({ allProducts, searchInputText, setSearchInputText }) {
  const router = useRouter();
  const { category } = router.query;

  //dis[display]play all products or searched products at autocomplete
  const displayProducts =
    category && searchInputText
      ? productsByCategory(allProducts, category)
      : allProducts;

  function changeHandler(event, value) {
    setSearchInputText(value);
  }

  useEffect(() => {
    setSearchInputText("");
  }, [category]);

  console.log(displayProducts, "displayProducts");
  return (
    <Stack width={300}>
      <Autocomplete
        disablePortal
        autoHighlight={true}
        freeSolo={true}
        id="search"
        value={searchInputText}
        autoComplete={true}
        onInputChange={changeHandler}
        options={findProductName(displayProducts)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="suchen"
          />
        )}
      />
    </Stack>
  );
}
export default Searchbar;
