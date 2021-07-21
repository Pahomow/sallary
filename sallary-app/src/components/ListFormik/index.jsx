import React, {useState} from "react";
import { FieldArray } from 'formik';
import {List ,Button ,Dialog, DialogActions,DialogContent,DialogTitle, Box, ListItemText ,ListItem, ListItemIcon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      overflowX: 'hidden',
      maxHeight: 300,
    },
}));

export const ListFormik = ({initialValues, name, removeButton}) => {
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
                     <DialogContent> 
                       {/* {columns.map((item) => {
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
                       })} */}
                     </DialogContent>
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
                        {console.log(project)}  
                        <ListItem button>
                            <ListItemText inset primary={project.name} />
                            {removeButton && (
                            <ListItemIcon onClick={() => openDialogClick(index)}> 
                                <DeleteIcon />
                            </ListItemIcon>)}
                        </ListItem>  
                    </div>
                  ))}
              </List>
            )}}
          </FieldArray>
  </Box>
)};

        //   {/* <button type="submit">Invite</button> */}
        //   <pre>{JSON.stringify(values, null, 2)}</pre>