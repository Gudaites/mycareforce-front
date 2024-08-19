import { RegistrationProvider } from "./registration";
import { UserProvider } from "./user";

export const ContextsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UserProvider>
      <RegistrationProvider>{children}</RegistrationProvider>
    </UserProvider>
  );
};
