import React from "react";
import { LoginForm } from "./components/LoginForm";
import {
  HomeContainer,
  UserContainer,
  CompanyContainer,
} from "./styles";

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <HomeContainer>
        <UserContainer>
          <LoginForm
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            userType="user"
          />
        </UserContainer>
        <CompanyContainer>
          <LoginForm
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            userType="company"
          />
        </CompanyContainer>
      </HomeContainer>
  );
}