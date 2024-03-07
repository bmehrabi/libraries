import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        {/* About */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <h2>About Me</h2>

            <p>
              My name is Babak Mehrabi and I did this task as an interview task for Wire.
            </p>
            <p>
              If you have any question or comment regarding this project, you can write me an email:
              <br/>
              <b>b.mehrabi.91 [at] gmail.com</b>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}