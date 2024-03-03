import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const DevelopmentProcess = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        {/* Development Process */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1>Development Process</h1>

            <p>
              As first, I have created a new project with CreateReactApp script. It generates the boilerplate codes and
              removes the need for manual configuration of everything.
              <br/>
              Because I wanted to have control over the entire project, I used `reject` command to ask CreateReactApp
              script to publish all of the configuration files that it hides on default.
            </p>

            <h2>
              Decision about the UI library
            </h2>

            <p>
              Based on the requirements of the project which was a website with header, sidebar, and footer, I decided
              to pick this template.
              <br/>
              <a href="https://mui.com/material-ui/getting-started/templates/dashboard/">
                https://mui.com/material-ui/getting-started/templates/dashboard/
              </a>
            </p>

            <p>
              So, I added the the template files to project and I was able to run this template inside my react app.
            </p>

            <p>
              From, this point the actual word started. Since, I wanted to make sure that I have tests from the early
              phase of the project and I'm checking the coverage report constantly, I added the coverage report
              to my package.json.
            </p>

            <p>
              In the next step, I changed the sidebar component to have three main pages.
            </p>
            <ol>
              <li>Search</li>
              <li>Development Process</li>
              <li>About</li>
            </ol>

            <p>
              <b>Search</b> page will be the main page that I will implement based on the project description.
              <br/>
              I will use <b>Development Process</b> page to describe the steps that I took during the project to do it.
              <br/>
              And the <b>About</b> page will be a short info page about me.
            </p>

            <h2>
              Implement Routing for the Project
            </h2>

            <p>
              After that, I wanted to be able to have the navigation between sidebar and the actual pages. So, I
              used <b>React Router Dom</b> to implement routing. I added links and routes to the project.
              <br/>
              Also, I refactored the template files in order to have one <b>Page Layout</b> which consists header,
              sidebar, and footer and three components which render the actual content of the page based on the route.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}