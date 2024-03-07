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
              Decision About the UI Library
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

            <p>
              Add the next step, I have added <b>React Testing Library</b> to the project. Until now, I was just
              creating the structure of the project. The development of the requirements has just begun. So, I want to
              make sure that I will write keep the good test coverage for the project as long as I'm developing it.
            </p>

            <p>
              In the next step, I have added the pagination with the default template data. Now, I will only show the
              first five records and there are buttons for accessing other pages in the table.
            </p>

            <h2>
              Getting Data from the API
            </h2>

            <p>
              In this step, I got rid of the test data and I have implemented the API layer. So, I have
              added <b>.env</b> file to store <b>API_KEY</b> and use it for accessing the API. This step does not
              include adding search functionality. So, I'm just using a fixed string for project name.
            </p>

            <h2>Adding Search Functionality</h2>

            <p>
              In the next step, I added a search component which users can type to it. I added a restriction that the
              project name must have at least 3 characters. Usually, searching on one letter or two letters bring a lot
              of load on the API. So, we are preventing unuseful searches on the API.
              <br/>
              Also, I have added a 200ms delay which prevents UI from sending multiple requests while user is typing.
            </p>

            <h2>Adding Sort Functionality</h2>

            <p>
              As the final step, I have added the sorting by star functionality. Now, there is switch next to the search
              box which allow users to search projects by star.
            </p>

            <h2>Commits and Development Process</h2>

            <p>
              All of these process also can be view in the git history. Each commit is descriptive and shows the step
              and the changes that has been done into the project.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}