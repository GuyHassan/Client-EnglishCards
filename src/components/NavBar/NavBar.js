import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import { Tabs, Tab } from "@material-ui/core";
import { historyPath } from '../../Utils';
import { useLogin } from '../../hooks';
const NavBar = () => {
    const history = useHistory();
    const [value, setValue] = useState(historyPath(history.location.pathname));
    const { userLoggedIn, loginManagement } = useLogin();

    const handleChange = (_e, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(historyPath(history.location.pathname))
    }, [userLoggedIn])
    
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Vocabulary
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Navigation"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Words" index={0} component={Link} to='/wordlearn' />
                    <Tab label="Upload Words" index={1} component={Link} to="/uploadwords" />
                    <Tab label={userLoggedIn ? 'Logout' : 'Login'}
                        index={2}
                        onClick={() => userLoggedIn && loginManagement()}
                        component={Link} to={'/login'}
                    />
                </Tabs>
            </Toolbar >
        </AppBar >
    );
}
export default NavBar;