import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({rows , columns}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
              {columns.map(column => <TableCell key={column.id} align={column.align}>{column.field}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            {rows.map((row) => (   
              <TableCell key={row.id} component="th" scope="row">
                {row.value}
              </TableCell>

            ))}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
