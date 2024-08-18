import { createContext, useCallback, useState } from "react";
import { authService } from "../services/auth";
import { IUser } from "../interfaces/user";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

interface ProviderProps {
  children: React.ReactNode;
}

interface UserContextType {
  user: IUser | null;
  login: (body: { email: string; password: string }) => void;
  signOut(): void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

UserContext.displayName = "UserContext";

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const user = localStorage.getItem("@mycareforce:user");

    if (user) {
      return JSON.parse(user);
    }

    return null;
  });

  const login = useCallback(
    async (body: { email: string; password: string }) => {
      try {
        const data = await authService.login(body);

        if (data) {
          const { accessToken, refreshToken, user: userResponse } = data;

          localStorage.setItem("@mycareforce:token", accessToken);
          localStorage.setItem("@mycareforce:refresh-token", refreshToken);
          localStorage.setItem(
            "@mycareforce:user",
            JSON.stringify(userResponse)
          ); // Corrigido para userResponse

          setUser(userResponse);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error("Aconteceu algum erro interno");
        }
      }
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@mycareforce:token");
    localStorage.removeItem("@mycareforce:refresh-token");
    localStorage.removeItem("@mycareforce:user");

    setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ user, login, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
