import * as React from 'react';
import {ChangeEvent, useCallback} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Projects from '../../components/project/Projects';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {debounce, FormControlLabel, Switch} from '@mui/material';

function SearchContent() {
  const [query, setQuery] = React.useState<string>('');
  const [sort, setSort] = React.useState<boolean>(false);
  const searchInputHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);
  const sortSwitchHandler = useCallback(() => {
    setSort(!sort);
  }, [sort]);

  const debouncedSearchInputHandler = debounce(searchInputHandler, 200);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Projects table */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Grid container justifyContent="flex-start" alignItems="center">
              <Grid item xs={3}>
                <TextField onChange={debouncedSearchInputHandler} label="Search" variant="outlined" />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel control={<Switch onChange={sortSwitchHandler} />} label="Sort by Stars" />
              </Grid>
            </Grid>
            <Box sx={{ m: '1rem' }} />
            <Projects query={query} sort={sort} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Search() {
  return <SearchContent />;
}
