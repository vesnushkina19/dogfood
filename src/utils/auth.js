import Local from "../Local";

export const ADMIN_EMAIL = "kate.vesnushkina@gmail.com";
export const USERS_STORAGE_KEY = "dogfoodUsers";

export const normalizeEmail = (value = "") => value.trim().toLowerCase();

export const getSavedUsers = () => {
  const users = Local.getItem(USERS_STORAGE_KEY, true);
  return Array.isArray(users) ? users : [];
};

export const isAdmin = (user) => normalizeEmail(user?.email) === ADMIN_EMAIL;

export const clearLocalRegistrations = (user) => {
  if (!isAdmin(user)) return false;

  localStorage.removeItem(USERS_STORAGE_KEY);
  localStorage.removeItem("shopUser");
  localStorage.removeItem("user");

  return true;
};
