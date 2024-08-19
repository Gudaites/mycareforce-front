import { useContext } from "react";
import { RegistrationContext } from "../contexts/registration";

export const useRegistration = () => {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error(
      "useRegistration must be used within a RegistrationContext"
    );
  }

  return context;
};
