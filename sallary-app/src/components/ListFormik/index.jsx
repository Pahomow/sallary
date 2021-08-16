import React, {useState} from "react";
import { FieldArray } from 'formik';
import {List ,Button ,Dialog, DialogActions,DialogTitle, Box, ListItemText ,ListItem, ListItemIcon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './style';

export const ListFormik = ({initialValues, name, transfer, removeButton}) => {
    const [showDialog,setShowDialog] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(null)
    const classes = useStyles();
    const handleclick = (remove) => {
        setShowDialog(!showDialog)
        remove(currentIndex)
    }
    const openDialogClick = (index) => {
        setShowDialog(!showDialog)
        setCurrentIndex(index)
    }
    return (
    <Box className={classes.root}>      
          <FieldArray name={name}>
            {({ remove }) => {
               return (   
                   <List>
                  {showDialog && (<Dialog open={showDialog}>
                     <DialogTitle>Вы уверены?</DialogTitle>
                     <DialogActions>
                       <Button variant="contained" color="primary" onClick={()=> handleclick(remove)}>
                         Да
                       </Button>
                       <Button variant="outlined" color="primary" onClick={()=> setShowDialog(!showDialog)}>
                         Нет
                       </Button>
                     </DialogActions>  
                   </Dialog>)}
                {initialValues.length > 0 &&
                  initialValues.map((project, index) => (
                    <div className="row" key={index}>
                        <ListItem button>
                            <ListItemText inset primary={project.name} />
                            {removeButton && (
                            <ListItemIcon onClick={() => openDialogClick(index)}> 
                                <DeleteIcon />
                            </ListItemIcon>)}
                            {transfer && (
                            <ListItemIcon onClick={() => openDialogClick(index)}> 
                                <ArrowForwardIcon />
                            </ListItemIcon>)}
                        </ListItem>  
                    </div>
                  ))}
              </List>
            )}}
          </FieldArray>
  </Box>
)};
