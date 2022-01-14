import React from 'react'
import {AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
// MenuItem, Menu
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';

const Navbar = ({totalItems} ) => {

    const classes = useStyles()
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image}/>
                    Tunde Stores
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button} />
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems } color='secondary'></Badge>
                    <ShoppingCart/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
