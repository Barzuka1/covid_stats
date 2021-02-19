import { Container } from "@material-ui/core";
import Router from "./Router";
import { Grid } from '@material-ui/core'
import Header from './components/Header'

function App() {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Router />
      </Grid>
    </Container>
  )
}

export default App;