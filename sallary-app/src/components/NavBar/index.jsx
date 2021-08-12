import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs , Tab} from '@material-ui/core'
import { privateRoutes } from '../../routes';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const history = useHistory()
  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleClick = (e , item) => {
      e.stopPropagation()
      history.push(item.path)
      console.log(e , item.path);
  }
  return (
    <Paper className={classes.root}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
      >
        {privateRoutes.map(item => {
          return  <Tab onClick={(event =>  handleClick(event , item))} key={item.path} label= {item.name} />
        })}

      </Tabs>
    </Paper>
  );
}
