import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const LessonSelect = () => {
  const [country, setCountry] = useState<string[]>([]);

  console.log(country);

  // const handleChange = () => {

  // }

  return (
    <Box width="250px">
      {/* <TextField label="Select countries" select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="US">ABD</MenuItem>
                <MenuItem value="FR">FRANCE</MenuItem>
            </TextField> */}
      <TextField
        SelectProps={{ multiple: true }}
        label="Select countries"
        select
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        }
      >
        <MenuItem value="TR">Turkey</MenuItem>
        <MenuItem value="US">ABD</MenuItem>
        <MenuItem value="FR">FRANCE</MenuItem>
      </TextField>
    </Box>
  );
};
