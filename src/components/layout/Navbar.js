import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: '5%',
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
        }
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            color: '#ffff00'
        }
    },
}));

const Navbar = (props) => {
    const classes= styles();
    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar>
                    <Link to="/shopping-cart" className={classes.link}>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>Shopping Cart</Typography>
                    </Link>
                    <div className={classes.grow} />
                    <Link to="/shopping-cart/cart" className={classes.link}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <Badge badgeContent={props.cartCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => ({
    cartCount: state.cart.totalQty,
});


export default connect(mapStateToProps)(Navbar);