import React, { createContext, useState, useEffect } from "react";
import { useUser } from "../hooks/user";
import { RegistrationService } from "../services/registration";
import { DayData } from "../services/available-slots";

interface ProviderProps {
  children: React.ReactNode;
}

interface RegistrationContextType {
  registrations: DayData[];
  isLoadingRegisters: boolean;
  fetchRegistrations(): void;
}

export const RegistrationContext = createContext<RegistrationContextType>(
  {} as RegistrationContextType
);

RegistrationContext.displayName = "RegistrationContext";

export const RegistrationProvider = ({ children }: ProviderProps) => {
  const { user } = useUser();
  const registrationService = new RegistrationService();
  const [registrations, setRegistrations] = useState<DayData[]>([]);
  const [isLoadingRegisters, setIsLoadingRegisters] = useState(true);

  const fetchRegistrations = async () => {
    try {
      setIsLoadingRegisters(true);
      const response = await registrationService.getAllRegistrarions();

      setRegistrations(response);
      setIsLoadingRegisters(true);
    } catch (error) {
      console.error("Erro ao carregar registrations:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRegistrations();
    }
  }, [user]);

  return (
    <RegistrationContext.Provider
      value={{ registrations, isLoadingRegisters, fetchRegistrations }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
