import * as authAPI from "api/auth";

export const fetchMenu = async () => {
  const {
    data: { menuUidList: uids },
  } = await authAPI.checkMenuRole();
  const {
    data: { list: menus },
  } = await authAPI.getMenu();
  return menus
    .filter((m) => m.useYn)
    .map((m) => {
      m.childMenu = m.childMenu.filter(
        (c) => uids.findIndex((u) => u === c.uid) !== -1 && c.visibleYn
      );
      return m;
    });
};
