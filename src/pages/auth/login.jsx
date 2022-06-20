import React, { useState } from "react";
import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { setMenu, setUser } from "features/baseSlice/baseSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMenu } from "plugins/mixin";
import * as authAPI from "api/auth";
import LogoComp from "components/base/logo";
import { grey } from "@mui/material/colors";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [failure, setFailure] = useState(false);
  const [visible, setVisible] = useState(false);

  const saveBaseMenu = async () => {
    const menuInfo = await fetchMenu();
    dispatch(setMenu(menuInfo));
  };
  const saveBaseUser = async (data) => {
    const { employee, "role-list": roles, token, user } = data;
    dispatch(
      setUser({
        token,
        userPk: user.id,
        userId: user.userId,
        userNm: user.userNm,
        userEmail: user.userEmail,
        teamPk: employee.team.id,
        teamNm: employee.team.teamNm,
        employeeNumber: employee.employee.employeeNumber,
        roleNm: roles[0].roleNm,
      })
    );
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await authAPI.login({
        userId: event.target.userId.value,
        userPwd: event.target.userPwd.value,
      });
      await saveBaseUser(data);
      await saveBaseMenu();
      navigate("/");
    } catch {
      setFailure(true);
    }
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    setFailure(false);
  };
  const onClickHandle = () => {
    setVisible(!visible);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
        pt={0}
        px={6}
      >
        <Grid item sm={5} display={{ xs: "none", md: "flex" }}>
          <Grid container direction="column" alignItems="end">
            <Grid item>
              <img
                style={{ width: "100%" }}
                src="/images/rpa_img.png"
                alt="RPA - RAINBOW BRAIN"
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  window.location.href = "http://rbrain.co.kr";
                }}
              >
                (주) 레인보우브레인
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            flexDirection="column"
            spacing={2}
            sx={{
              fontFamily: "Noto Sans KR",
              color: "#000",
              fontWeight: "500",
            }}
          >
            <Grid item>
              <LogoComp />
            </Grid>
            <Grid item>
              <TextField
                sx={{
                  backgroundColor: "white",
                }}
                error={failure}
                name="userId"
                label="아이디"
                variant="outlined"
                onChange={onChangeHandler}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                sx={{
                  backgroundColor: grey[100],
                }}
                variant="outlined"
                fullWidth
                error={failure}
                type={visible ? "text" : "password"}
                autoComplete="current-password"
                name="userPwd"
                label={failure ? "아이디 또는 비밀번호 확인 요망" : "비밀번호"}
                onChange={onChangeHandler}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={onClickHandle}>
                      {visible ? (
                        <Button>
                          <Visibility />
                        </Button>
                      ) : (
                        <Button>
                          <VisibilityOff />
                        </Button>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
