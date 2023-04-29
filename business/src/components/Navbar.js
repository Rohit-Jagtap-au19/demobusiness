import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          {/* <Button color="inherit">Login</Button> */}
          {isAuthenticated && <h2 style={{marginRight:'10px'}}>{user.name}</h2>}
          {isAuthenticated ? (
            <Button
              variant="contained"
              onClick={() =>
                logout({
                  logoutParams: { redirect_uri: window.location.origin },
                })
              }
            >
              Log Out
            </Button>
          ) : (
            <Button variant="contained" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
