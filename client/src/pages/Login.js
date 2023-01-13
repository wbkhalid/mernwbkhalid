import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      alert('Login Failed');
      console.log('Login Failed');
    } else {
      alert('Login Successfully');
      console.log('Login Successfully');

      navigate('/')
    }
  };
  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Log In
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form method="POST">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={loginUser}
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
            <Typography
              gutterBottom
              variant="p"
              align="center"
              fontWeight="bold"
            >
              If you do not already register
            </Typography>
          </NavLink>
        </Card>
      </Grid>
    </div>
  );
};

export default Login;
