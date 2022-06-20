import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import { blueGrey } from "@mui/material/colors";

const Index = (props) => {
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: blueGrey[50],
        }}
      >
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Index;
