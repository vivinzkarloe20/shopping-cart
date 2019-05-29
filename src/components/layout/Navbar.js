import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Badge, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    // const { classes } = this.props;
    const classes= styles();
    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>Shopping Cart</Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <Link to="/cart" className={classes.link}>
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