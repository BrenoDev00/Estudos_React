import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const Autocompletes = () => {
  const topFilms = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  return (
    <>
      <div>
        <h2>Autocomplete</h2>

        <Autocomplete
          size="medium"
          sx={{ width: 300 }}
          options={topFilms}
          renderInput={(params) => (
            <TextField {...params} label="chose a movie" />
          )}
        />
      </div>
    </>
  );
};
