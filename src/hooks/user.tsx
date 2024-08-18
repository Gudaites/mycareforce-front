import { useContext } from "react";

import { UserContext } from "../contexts/user";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("Cant load useUser");
  }
  return context;
};
