import React, {useState} from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Button,Dialog, DialogActions,DialogContent,DialogTitle, TextField} from '@material-ui/core'

export default function Table({columns , rows}) {
  const [currentRow,setCurrentRow] = useState(null)
  const [showDialog,setShowDialog] = useState(false)
  const [dataRows, setDataRows] = useState(rows)
  console.log(currentRow)
  const handleChange = e => {
    setCurrentRow({...currentRow, [e.target.name]: e.target.value})
}
  const updateRow = () => {
    const updatedRows = dataRows.map(item => item.id === currentRow.id ? currentRow : item)
    setDataRows(updatedRows)
    setShowDialog(false)  
}
  return (
    <div style={{ height: 300, width: "100%" }}>
    {currentRow && (<Dialog open={showDialog}>
      <DialogTitle>Update data</DialogTitle>
      <DialogContent> 
        {columns.map((item) => {
          return (
            <TextField
            key={item.id} 
            label={item.label}
            placeholder="Enter Your name"
            fullWidth 
            name={item.field}
            // value= {currentRow.name}
            onChange={handleChange}/>
          )
        })}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={updateRow}>
          Update
        </Button>
        <Button variant="outlined" color="primary" onClick={()=> setShowDialog(false)}>
          Cancel
        </Button>
      </DialogActions>  
    </Dialog>)}
    <Button 
        disabled={!currentRow} 
        onClick={()=> setShowDialog(true)}
        variant="contained" 
        color="primary" 
        style={{marginBottom: 10}}>
        Edit
      </Button>
      <DataGrid rows={dataRows} onRowSelected={item => setCurrentRow(item.data)} columns={columns} />
    </div>
  );
}