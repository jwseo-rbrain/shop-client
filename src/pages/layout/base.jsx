import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "95vh" }}
    >
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default App;
