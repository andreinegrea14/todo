import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Home } from './Home';
import { Add } from './Add';
import { ToDo } from './App';
import { List } from './List';
import { App } from "./App";

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  const [todos, setTodos] = (useState<ToDo[]>([]));


  return (

    <div className={classes.root}>
      <div>
        <div className="header-div">
          <h3 className="header1">ToDo App</h3>

          <h4 className="header1">Keep your tasks organized</h4>

        </div>
        {/* <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="List" {...a11yProps(1)} />
            <Tab label="Add" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <List todos={todos} setTodos={setTodos} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Add todos={todos} setTodos={setTodos} />
        </TabPanel> */}
      </div>
    </div>
  );
}