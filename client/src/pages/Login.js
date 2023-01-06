import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Log In
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <Typography gutterBottom variant="h6" align="center">
            OR
          </Typography>

          <NavLink className="navbar-brand" to="/signup">
            <Typography gutterBottom variant="p" align="center" fontWeight='bold'>
              If you do not already register
            </Typography>
          </NavLink>
        </Card>
      </Grid>
    </div>
  );
};

export default Login;
