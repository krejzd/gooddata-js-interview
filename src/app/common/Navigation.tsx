import React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Navigation: React.FC = () => {
  const history = useHistory();

  return (
    <List>
      <ListItem button onClick={() => history.push('/')}>
        <ListItemText primary="Home"/>
      </ListItem>
      <ListItem button onClick={() => history.push('/gross-profit')}>
        <ListItemText primary="Gross profit"/>
      </ListItem>
    </List>
  );
};

export default Navigation;