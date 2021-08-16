import React, {useState} from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Button,Box} from '@material-ui/core'
import DialogComponent from "../../Dialog";
import AccoutingDialogComponent from "../../AccoutingDialog";

export default function Table({columns , rows , accouting}) {
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
    <Box style={{ height: 300, width: "100%" }}>
      {currentRow && (
          accouting ?
          <AccoutingDialogComponent/>
          :
              <DialogComponent
                  showDialog = {showDialog }
                  columns = {columns}
                  handleChange={handleChange}
                  updateRow={updateRow}
                  setShowDialog={setShowDialog}
              />
      )}

    <Button 
        disabled={!currentRow} 
        onClick={()=> setShowDialog(true)}
        variant="contained" 
        color="primary" 
        style={{marginBottom: 10}}>
        Edit
      </Button>
      <DataGrid rows={dataRows} onRowSelected={item => setCurrentRow(item.data)} columns={columns} />
    </Box>
  );
}