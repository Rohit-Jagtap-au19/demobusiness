import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import { styled } from "@mui/material/styles";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const handleElementClick = (path) => {
    navigate(path);
  };

  let count = 10;
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Sidenav />
      <Box height={80} />
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
            <Card
              style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allprogram')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Total Internship Hosted :<span> {count}</span>
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/active')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Active Internship :<span> {count - 3}</span>
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/unactive')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Inactive Internship :<span> {count - 7}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Interns Inroll :<span> {count * 50}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Interns With A+ Grade :<span> {count * 5}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Interns With A Grade :<span> {count * 13}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Interns With B+ Grade :<span> {count * 10}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Interns With B Grade :<span> {count * 20}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card style={{ padding: "20px", cursor: "pointer" }}
              onClick={() => handleElementClick('/allintern')}
            >
              <Typography gutterBottom variant="h5" component="div">
                Waiting For Completion :<span> {count * 2}</span>
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              style={{
                padding: "20px",
                backgroundColor: "yellow",
                boxShadow: "-10px 10px 20px 10px black",
                cursor: "pointer",
              }}
              onClick={() => handleElementClick('/offer')}

            >
              <Typography gutterBottom variant="h5" component="div">
                This month offer : Now u can peek into all Interns Scores.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
