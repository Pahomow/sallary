import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import TypographyComponent from '../../Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    overflow: 'auto',
    overflowX: 'hidden',
    maxHeight: 300,
  },
  // listSection: {
  //   backgroundColor: 'inherit',
  // },
  // ul: {
  //   backgroundColor: 'inherit',
  //   padding: 0,
  // },
}));

function generate(element) {
  return [0, 1, 2,3,4,5,6,7,8,9].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ListComponent = ({remove ,transfer, title }) => {
  const classes = useStyles();
  const handleclick = () => {
    console.log("click");
  }
  return (
    <Box>  
      <Box>
        <TypographyComponent title={title}/>
      </Box>
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {/* {label ? <TypographyComponent title={label}/>: null} */}

        <Grid item xs={12} md={6}>
          <Box className={classes.demo}>
            <List >
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"         
                  />
                  {remove && (
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={handleclick}/>
                    </IconButton>
                  </ListItemSecondaryAction>)}
                  {transfer && (
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="transfer">
                      <ArrowForwardIcon onClick={handleclick}/>
                    </IconButton>
                  </ListItemSecondaryAction>)}  
                </ListItem>,
              )}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default ListComponent