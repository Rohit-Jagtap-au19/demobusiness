import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";



export default function LandingPage() {
  return (
    <div >
      <Container maxWidth="md">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to my Landing Page
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              This is a basic landing page created with React JS and Material
              UI.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              
            >
              Learn More
            </Button>
            <Button variant="outlined" >
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://via.placeholder.com/500x500"
              alt="placeholder"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
