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

  //display all products or searched products at autocomplete
  const products =
    category && searchInputText
      ? productsByCategory(searchInputText, category)
      : allProducts;

  function changeHandler(event, value) {
    setSearchInputText(value.toLowerCase());
  }

  return (
    <Stack width={300}>
      <Autocomplete
        disablePortal
        freeSolo={true}
        id="search"
        autoComplete={true}
        onInputChange={changeHandler}
        // options={findProducts}
        options={findProductName(products)}
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
