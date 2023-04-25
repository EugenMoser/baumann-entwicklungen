import Autocomplete from "@mui/material/Autocomplete";
//import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import testDb from "../../helpers/testdb.json";

function Searchbar() {
  return (
    <h2>hier kommt die Suchleiste</h2>
    // <Stack width={300}>
    //   <Autocomplete
    //     id="search"
    //     freeSolo
    //     options={testDb.map((option) => option.title)}
    //     // renderInput={(params) => (
    //     // <TextField
    //     //   {...params}
    //     //   label="suchen"
    //     // />
    //     // )}
    //   />
    // </Stack>
  );
}
export default Searchbar;
