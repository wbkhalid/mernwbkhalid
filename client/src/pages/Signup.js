import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cPassword: '',
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  };
  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Sign Up
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={user.name}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={user.email}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    name="work"
                    placeholder="Enter Profession"
                    label="Work"
                    variant="outlined"
                    fullWidth
                    required
                    value={user.work}
                    onChange={handleInputs}
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
                    value={user.password}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    name="cPassword"
                    type="password"
                    placeholder="Enter password"
                    label="confirm_password"
                    variant="outlined"
                    fullWidth
                    required
                    value={user.cPassword}
                    onChange={handleInputs}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>

          <Typography gutterBottom variant="h6" align="center">
            OR
          </Typography>

          <NavLink className="navbar-brand" to="/login">
            <Typography
              gutterBottom
              variant="p"
              align="center"
              fontWeight="bold"
            >
              Already Register
            </Typography>
          </NavLink>
        </Card>
      </Grid>
    </div>
  );
};

export default Signup;
