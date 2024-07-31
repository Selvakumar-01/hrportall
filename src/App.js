import { Card, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Navbar from '../src/components/Navbar'
import DD from './components/DD'

function App() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Card sx={{ m: 2, p: 2 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
                <Header />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={1} sx={{ mt: 4 }}>
                <Navbar />
              </Grid>
              <Grid item xs={11} sm={11} md={11} lg={11} xl={11} sx={{ mt: 5 }} >
                <DD />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
