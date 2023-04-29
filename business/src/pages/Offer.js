import React from "react";
import Sidenav from "../components/Sidenav";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Box, Container, Grid, Typography } from "@mui/material";
import Sidenav2 from "../components/Sidenav2";

export default function Offer() {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidenav />
      {/* <Sidenav2/> */}
      <Box height={80} />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to Offers
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              here You will find all Offer just for {user.name}
              programs, For now this service is completly free
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
