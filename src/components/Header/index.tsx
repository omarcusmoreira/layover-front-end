import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Search, Widgets } from "@mui/icons-material";
import logo from "../../assets/images/Logo.svg";
import HandleUserSession from "../../utilities/HandleUserSession";
import Utils from "../../utilities/Utils";
import { useState } from "react";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  SearchContainer,
  stylesInput,
} from "./styles";

import styled from "styled-components";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

interface HeaderProps {
  handleSearch?: (e: string) => void;
}

export function Header({ handleSearch }: HeaderProps) {
  // const userName = HandleUserSession.getItemFromLocalStorage("userName");
  const userName = "userName";

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [ user ] = useAuthState(auth);
  const [ signOut ] = useSignOut(auth);

  function handleSignOut(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    signOut();  
  }

  return (
    <>
      <AppBar sx={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.15)', borderBottom: '1px solid rgba(200, 200, 200)'}}>
        <Toolbar sx={{background: '#FEFEFE', height: '95px', padding: 0, margin: 0}}>
          <HeaderContainer>
            {handleSearch && (
              <SearchContainer>
                <Search />
                <TextField
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    handleSearch(event.target.value);
                  }}
                  label="Procurar"
                  variant="standard"
                  InputProps={{
                    style: stylesInput,
                    disableUnderline: true,
                  }}
                />
              </SearchContainer>
            )}
            <LogoContainer>
              <img src={logo} alt="logo" />
            </LogoContainer>

            {user?.email ? (
              <>
                <MenuContainer>
                  <Typography variant="h6">Olá, {user.email}</Typography>

                  <Button
                    onClick={handleMenu}
                    color="inherit"
                    className="ml10"
                    variant="outlined"
                    startIcon={<Widgets />}
                  >
                    Menu
                  </Button>
                </MenuContainer>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={anchorEl !== null}
                  onClose={handleClose}
                >
                  <MenuItem
                    key="1"
                    onClick={() => (window.location.href = "/mypassword")}
                  >
                    Alterar Senha
                  </MenuItem>
                  <MenuItem
                    key="2"
                    onClick={() => (window.location.href = "/flight-status")}
                  >
                    Status de Voo
                  </MenuItem>
                  <MenuItem
                    key="2"
                    onClick={handleSignOut}
                  >
                    Sair
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <></>
            )}
          </HeaderContainer>
        </Toolbar>
      </AppBar>
    </>
  );
}
