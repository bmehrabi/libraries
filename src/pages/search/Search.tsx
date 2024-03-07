import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Projects from '../../components/project/Projects';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {ChangeEvent, useCallback} from 'react';
import {debounce} from '@mui/material';

const mdTheme = createTheme();

function SearchContent() {
  const [query, setQuery] = React.useState<string>('');
  const searchInputHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  const debouncedSearchInputHandler = debounce(searchInputHandler, 200);

  return (
    <ThemeProvider theme={mdTheme}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Projects table */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ width: 200 }}>
                <TextField onChange={debouncedSearchInputHandler} label="Search" variant="outlined" />
              </Box>
              <Box sx={{ m: '1rem' }} />
              <Projects query={query} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default function Search() {
  return <SearchContent />;
}
