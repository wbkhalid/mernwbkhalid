import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const Contact = () => {
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
                    placeholder="Enter Name"
                    label="Name"
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
                    label="Email"
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
                    label="Phone"
                    variant="outlined"
                    sx={{
                      mx: 2,
                    }}
                    xs={12}
                    required
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{ m:5, minWidth: 800, width:'auto' }}
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
