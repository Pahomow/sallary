import {Button,Dialog, Box , DialogActions,DialogContent,DialogTitle, TextField} from '@material-ui/core'
import React from "react";

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
            <Button variant="contained" color="primary" onClick={updateRow}>
                Update
            </Button>
            <Button variant="outlined" color="primary" onClick={()=> setShowDialog(false)}>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
);

export default DialogComponent