import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// 로고 컴포넌트
const LogoComp = () => {
  const navigator = useNavigate();

  const onClickHandle = () => {
    navigator("/");
  };
  return (
    <Grid
      container
      display={{ xs: "felx" }}
      sx={{
        cursor: "pointer",
        userSelect: "none",
        ":hover": {
          transform: "scale(1.01)",
          transition: "all 200ms ease-in-out",
        },
      }}
      justifyContent="center"
      alignItems="center"
      onClick={onClickHandle}
    >
      <Grid item mr={1} mt={0.8}>
        <img src="/images/logo.svg" alt="ai-brain" style={{ height: "33px" }} />
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 0,
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Box element="div" display="flex" flexDirection="row">
            <Box element="span" color={purple[200]}>
              AI
            </Box>{" "}
            <Box element="span" color={grey["A700"]}>
              BRAIN
            </Box>
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoComp;
