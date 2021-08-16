import React from "react";
import {Dialog, DialogActions,DialogContent,DialogTitle, TextField} from '@material-ui/core'
import Button from "../Button";
const DialogComponent= ({showDialog , columns , handleChange , updateRow , setShowDialog}) => (
    <Dialog open={showDialog}>
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
            //Todo: test Button
          <Button variant="contained" color="primary" onClick={updateRow} title="Update"/>
          <Button variant="outlined" color="primary" onClick={()=> setShowDialog(false)} title="Cancel"/>
        </DialogActions>
    </Dialog>
);

export default DialogComponent