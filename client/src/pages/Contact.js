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
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const CallContactPage = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserData({
        ...data,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message:data.message
      });
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

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const ContactHandler = async (e) => {
    e.preventDefault();
    const {name, email, phone, message} = userData;
    console.log(name, email, phone, message)
    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (!data) {
      alert('Message not send');
    } else {
      alert('message send successfully');
      setUserData({ ...userData, message:'' });
    }
  };

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Contact Us
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 900, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form method="POST">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    type="text"
                    value={userData.name}
                    placeholder="Enter Name"
                    onChange={handleInputs}
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
                    onChange={handleInputs}
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
                    onChange={handleInputs}
                    value={userData.phone}
                    variant="outlined"
                    sx={{
                      mx: 2,
                    }}
                    xs={12}
                    required
                  />

                  <TextField
                   name="message"
                    type="text"
                    value={userData.message}
                    id="outlined-multiline-static"
                    placeholder="Please type your Reviews"
                    onChange={handleInputs}
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{ m: 5, minWidth: 800, width: 'auto' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    onClick={ContactHandler}
                  >
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
