import { Grid, Box } from "@mui/material";

export const LessonGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={12} md={8}>
          8 unit area
        </Grid>
        <Grid xs={12} md={4}>
          4 unit area
        </Grid>
        <Grid xs={12} md={8}>
          8 unit area
        </Grid>
        <Grid xs={12} md={4}>
          4 unit area
        </Grid>
      </Grid>
      {/* <Grid container>
                <Grid xs={8}>8 unit area</Grid>
                <Grid xs={4}>4 unit area</Grid>
            </Grid> */}
    </Box>
  );
};
