import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({});
  const CallContactPage = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CallContactPage();
  }, []);

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Contact Us
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 900, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    type="text"
                    value={userData.name}
                    placeholder="Enter Name"
                   
                    variant="outlined"
                    sx={{
                      mx: 2,
                    }}
                    xs={12}
                    required
                  />
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={userData.email}
                    
                    variant="outlined"
                    sx={{
                      mx: 2,
                    }}
                    xs={12}
                    required
                  />

                  <TextField
                    name="phone"
                    type="number"
                    placeholder="Enter phone number"
                    value={userData.phone}
                  
                    variant="outlined"
                    sx={{
                      mx: 2,
                    }}
                    xs={12}
                    required
                  />

                  <TextField
                    id="outlined-multiline-static"
                   placeholder='Please type your Reviews'
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{ m: 5, minWidth: 800, width: 'auto' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="outlined" color="primary">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Contact;
