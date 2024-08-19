import React, { useState, useCallback } from "react";
import { FaStethoscope, FaRegCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import Avatar from "react-nice-avatar";
import {
  Container,
  HeaderContent,
  Profile as ProfileContainer,
  Info,
  CalendarWrapper,
  NotificationBadge,
} from "./styles";
import { useUser } from "../../hooks/user";
import Drawer from "../Drawer";
import { useRegistration } from "../../hooks/registration";

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
  const { registrations } = useRegistration();
  const { signOut } = useUser();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <Container>
      <HeaderContent>
        <FaStethoscope color="#18A0FB" size={25} />
        <h1>Nurse</h1>
      </HeaderContent>

      <HeaderContent>
        <button onClick={toggleDrawer} type="button">
          <CalendarWrapper>
            <FaRegCalendarAlt color="#18A0FB" size={25} />
            <NotificationBadge>
              {registrations.reduce((acc, curr) => acc + curr.hours.length, 0)}
            </NotificationBadge>{" "}
          </CalendarWrapper>
        </button>

        <Profile />
        <button onClick={() => signOut()}>
          <FaSignOutAlt color="#18A0FB" size={25} />
        </button>
      </HeaderContent>

      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}

      {children}
    </Container>
  );
};

export default Header;
