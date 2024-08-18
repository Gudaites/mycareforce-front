import { UserProvider } from "./user";

export const ContextsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <UserProvider>{children}</UserProvider>;
};
