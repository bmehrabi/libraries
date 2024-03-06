import * as React from 'react';
import {ChangeEvent, useCallback} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableContainer, TablePagination} from '@mui/material';
import Paper from '@mui/material/Paper';
import Title from '../Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz 2', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Tom Scholz 3', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(4, '16 Mar, 2019', 'Tom Scholz 4', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(5, '16 Mar, 2019', 'Tom Scholz 5', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(6, '16 Mar, 2019', 'Tom Scholz 6', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(7, '16 Mar, 2019', 'Tom Scholz 7', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(8, '16 Mar, 2019', 'Tom Scholz 8', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    9,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    10,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

export default function Orders() {
  const ROWS_PER_PAGE_OPTION = [5, 10, 25];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Paper>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship To</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell align="right">{`$${row.amount}`}</TableCell>
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
