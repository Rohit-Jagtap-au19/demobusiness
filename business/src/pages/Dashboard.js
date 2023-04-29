import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Dashboard() {
  let count = 10;
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Sidenav />
      <Box height={80}/>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Dashboard Page
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Total Internship Hosted :<span> {count}</span>
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Active Internship :<span> {count - 3}</span>
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Inactive Internship :<span> {count - 7}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Interns Inroll :<span> {count * 50}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Interns With A+ Grade :<span> {count * 5}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Interns With A Grade :<span> {count * 13}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Interns With B+ Grade :<span> {count * 10}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Interns With B Grade :<span> {count * 20}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Waiting For Completion :<span> {count * 2}</span>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
