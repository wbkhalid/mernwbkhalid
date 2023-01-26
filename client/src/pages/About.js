import{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };
  useEffect(() => {
    callAboutPage();
  },[]);
  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center" textTransform='uppercase'>
        About Us
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 900, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                <Typography gutterBottom variant="h3" align="center" textTransform='uppercase'>
        About Us
      </Typography>
                </Grid>

              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                <Typography gutterBottom variant="h3" align="center" textTransform='uppercase'>
        About Us
      </Typography>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default About;
