import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <SearchIcon/>
        </ListItemIcon>
        <ListItemText primary="Search"/>
      </ListItemButton>
    </Link>
    <Link to="/development-process">
      <ListItemButton>
        <ListItemIcon>
          <CodeIcon/>
        </ListItemIcon>
        <ListItemText primary="Development process"/>
      </ListItemButton>
    </Link>
    <Link to="/about">
      <ListItemButton>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText primary="About Me"/>
      </ListItemButton>
    </Link>
  </React.Fragment>
);