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



const rows = [
{data: '20%'},
{data: '25%'},
{data: '30%'}
];

export default function SaleTypeTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Outband</TableCell>
            <TableCell align="center">Inband</TableCell>
            <TableCell align="center">Free</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
                {rows.map(item => {
                    <TableCell component="th" scope="row">
                        {item}
                    </TableCell>
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}