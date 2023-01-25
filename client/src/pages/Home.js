import { Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const CallHomePage = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CallHomePage();
  }, []);

  return (
    <>
      <Grid>
        <Typography gutterBottom variant="h6" align="center">
          Welcome
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          align="center"
          textTransform="upperCase"
        >
          {userName}
        </Typography>
        <Typography gutterBottom variant="h4" align="center">
          {show ? 'Happy to see You' : 'We are Mern stack developer'}
        </Typography>
      </Grid>
    </>
  );
};

export default Home;
