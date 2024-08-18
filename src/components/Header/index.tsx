import React, { useState, useCallback } from "react";
import { FaStethoscope, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "react-nice-avatar";
import {
  Container,
  HeaderContent,
  Profile as ProfileContainer,
  Info,
} from "./styles";
import { useUser } from "../../hooks/user";
import Drawer from "../Drawer";

// Componente para o perfil
const Profile: React.FC = React.memo(() => {
  const { user } = useUser();

  return (
    <ProfileContainer>
      <Avatar style={{ width: "2.5rem", height: "2.5rem" }} />
      <Info>
        <Link to="/profile">
          <strong>{user?.name}</strong>
        </Link>
      </Info>
    </ProfileContainer>
  );
});

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <Container>
      <HeaderContent>
        <FaStethoscope color="#18A0FB" size={25} />
        {/* <h1>Nurse Alguma coisa</h1> */}
      </HeaderContent>

      <HeaderContent>
        <button onClick={toggleDrawer} type="button">
          <FaCalendar color="#18A0FB" />
        </button>

        <Profile />
      </HeaderContent>

      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </Container>
  );
};

export default Header;
