import api from "./index";

export const login = (data) => {
  return api({
    method: "post",
    url: "/authentication/login",
    data,
  });
};

export const checkMenuRole = () => {
  return api({
    url: `/authorization/menu/me`,
    method: "get",
  });
};

export const getMenu = () => {
  return api({
    url: `/authorization/menu/all`,
    method: "get",
  });
};

export const setFooter = (data) => {
  return api({
    url: "/setting/FOOTER_MESSAGE",
    method: "put",
    data,
  });
};

export const getFooter = () => {
  return api({
    url: "/setting/FOOTER_MESSAGE",
    method: "get",
  });
};

export const getMenuRole = (rolePk) => {
  return api({
    url: `/authorization/menu/${rolePk}`,
    method: "get",
  });
};
