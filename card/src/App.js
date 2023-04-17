import "./App.css";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Card Project</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Eu esse anim ipsum exercitation adipisicing elit consectetur laboris commodo ut. Eiusmod laborum veniam magna excepteur. Cupidatat sint aute Lorem culpa pariatur ea eiusmod sit magna. Sit in duis sit do ad proident tempor anim exercitation. Fugiat non exercitation aliqua sit amet consectetur."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course
              image={Bootstrap}
              title="Bootstrap 5"
              description="Eu esse anim ipsum exercitation adipisicing elit consectetur laboris commodo ut. Eiusmod laborum veniam magna excepteur. Cupidatat sint aute Lorem culpa pariatur ea eiusmod sit magna. Sit in duis sit do ad proident tempor anim exercitation. Fugiat non exercitation aliqua sit amet consectetur."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course
              image={Ccsharp}
              title="Csharp"
              description="Eu esse anim ipsum exercitation adipisicing elit consectetur laboris commodo ut. Eiusmod laborum veniam magna excepteur. Cupidatat sint aute Lorem culpa pariatur ea eiusmod sit magna. Sit in duis sit do ad proident tempor anim exercitation. Fugiat non exercitation aliqua sit amet consectetur."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course
              image={Kompleweb}
              title="Kompleweb"
              description="Eu esse anim ipsum exercitation adipisicing elit consectetur laboris commodo ut. Eiusmod laborum veniam magna excepteur. Cupidatat sint aute Lorem culpa pariatur ea eiusmod sit magna. Sit in duis sit do ad proident tempor anim exercitation. Fugiat non exercitation aliqua sit amet consectetur."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
