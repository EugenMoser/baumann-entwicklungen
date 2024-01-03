import { useEffect } from "react";

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

  function getLabel(category) {
    let categoryLabel = "";
    switch (category) {
      case "moebel":
        categoryLabel = "Möbelbereich";
        break;
      case "halterung":
        categoryLabel = "Halterung";
        break;
      case "wasser":
        categoryLabel = "Wasserbereich";
        break;
      case "elektro":
        categoryLabel = "Elektronikbereich";
        break;
      case "lueftung":
        categoryLabel = "Lüftungbereich";
        break;
    }
    const label = category ? `${categoryLabel} durchsuchen` : "suchen";
    return label;
  }

  useEffect(() => {
    setSearchInputText("");
  }, [category]);

  return (
    <Stack width={300}>
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
    </Stack>
  );
}
export default Searchbar;
