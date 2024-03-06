import * as React from 'react';
import {ChangeEvent, useCallback, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableContainer, TablePagination} from '@mui/material';
import Paper from '@mui/material/Paper';
import Title from '../Title';
import {IProject} from './typings';
import {getSearchUri} from 'src/api/api';

export default function Projects() {
  const ROWS_PER_PAGE_OPTION = [5, 10, 25];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState<IProject[]>([]);

  /**
   * Validates the API response. Throws an exception if it is not valid.
   * @param response
   */
  const validateResponse = (response: Response): void => {
    if (!response.ok) {
      throw new Error('Network response was not OK.');
    }
  }

  /**
   * Fetches the data from API and sets into the component state.
   */
  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(getSearchUri('grunt'));

      validateResponse(response);

      const result = await response.json();
      setRows(result);
    } catch (error: any) {
      console.error(error.toString());
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  /**
   * Change handler for page change.
   * @param event Mouse event.
   * @param newPage New page that must be shown to the user.
   */
  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      setPage(newPage);
  }, []);

  /**
   * Change handler for rows per page change.
   * @param event Change event.
   */
  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  }, []);

  return (
    <React.Fragment>
      <Title>Projects</Title>
      <Paper>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Licenses</TableCell>
                <TableCell>Repository URL</TableCell>
                <TableCell align="right">Stars</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.repository_url}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.licenses || '-'}</TableCell>
                  <TableCell>
                    <a href={row.repository_url} rel="noreferrer" target="_blank">{row.repository_url}</a>
                  </TableCell>
                  <TableCell align="right">{row.stars}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={ROWS_PER_PAGE_OPTION}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}
