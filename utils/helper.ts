import { Themes } from "@/types";

export const changeTheme = (theme: Themes) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };