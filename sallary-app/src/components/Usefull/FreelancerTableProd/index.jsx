import React , {useState} from 'react';
import useStyles from './style';
import {Paper, Table , TableBody , TableCell , TableContainer, TableHead , TablePagination ,TableRow} from '@material-ui/core'
import {columns} from '../../../utils/consts'

export default function FreelancerTable({teamProps}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.freelancers.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {teamProps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              console.log(row)
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()}>
                   {columns.map((column) => {
                        const value = row[column.id]
                        console.log(value);
                        return (
                            <TableCell key={Math.random()} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                      })}
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={teamProps.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
