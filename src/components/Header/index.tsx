import React, { useState, useCallback } from "react";
import { FaStethoscope, FaCalendar } from "react-icons/fa";
import Avatar from "react-nice-avatar";
import {
  Container,
  HeaderContent,
  Profile as ProfileContainer,
  Info,
} from "./styles";
import { useUser } from "../../hooks/user";
import Drawer from "../Drawer";

const Profile: React.FC = React.memo(() => {
  const { user } = useUser();

  return (
    <ProfileContainer>
      <Avatar style={{ width: "2.5rem", height: "2.5rem" }} />
      <Info>
        <strong>{user?.name}</strong>
      </Info>
    </ProfileContainer>
  );
});

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <Container>
      <HeaderContent>
        <FaStethoscope color="#18A0FB" size={25} />
        <h1>Nurse Alguma coisa</h1>
      </HeaderContent>

      <HeaderContent>
        <button onClick={toggleDrawer} type="button">
          <FaCalendar color="#18A0FB" />
        </button>

        <Profile />
      </HeaderContent>

      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}

      {children}
    </Container>
  );
};

export default Header;
