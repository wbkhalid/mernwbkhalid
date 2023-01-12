import { Button, Typography, Card } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Card style={{ maxWidth: 600, padding: '20px 5px', margin: '0 auto' ,display:'grid', placeContent:'center' }}>
        <Typography  variant="h3" align="center" >
          Please type correct url
        </Typography>
    
          <NavLink className="navbar-brand" to="/">
            <Button variant="outlined" color="primary" >
              Back to Home
            </Button>
          </NavLink>
      </Card>
    </>
  );
};

export default Error;
