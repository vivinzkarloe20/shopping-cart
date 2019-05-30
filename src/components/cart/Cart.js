import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';

const theme = createMuiTheme({
    spacing: 1
})

const useStyles = makeStyles(({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    wrapper: {
        margin: '4%'
    },
    table: {
        minWidth: 650,
    },
    checkout: {
        padding: '15px',
    },
    total: {
        marginLeft: 'auto',
    }
}));

const Cart = (props) => {  
    const classes = useStyles();
    const { cartCheckout } = props;

    const onRemoveFromCart = (id) => {
        props.removeFromCart(id);
    }

    return (
        <Grid container spacing={5} className={classes.wrapper}>
            <Grid item md={9} xs={12}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartCheckout.cart.length !== 0 ? 
                        (cartCheckout.cart.map(cartItem => (
                            <TableRow key={cartItem.id}>
                            <TableCell component="th" scope="row">
                                {cartItem.name}
                            </TableCell>
                            <TableCell align="right">{cartItem.qty}</TableCell>
                            <TableCell align="right">${cartItem.price}</TableCell>
                            <TableCell align="right">${cartItem.subtotal.toFixed(2)}</TableCell>
                            <TableCell align="right"><Button onClick={() => onRemoveFromCart(cartItem.id)}>X</Button></TableCell>
                            </TableRow>
                        ))) : 
                        (<TableRow>
                            <TableCell colSpan={5}>
                                <Typography align="center">The cart is empty.</Typography> 
                            </TableCell>
                        </TableRow>) }
                    </TableBody>
                </Table>
            </Paper>
            </Grid>
            <Grid item md={3} xs={12}>
                <Paper className={classes.checkout}>
                    <Typography>Checkout</Typography>
                    <Box display="flex" flexDirection="row">
                        <Box variant="h5">Total: </Box>
                        <Box className={classes.total} variant="h6">${cartCheckout.totalPrice.toFixed(2)}</Box>
                    </Box>
                    <Button>
                        <Typography>
                            Confirm checkout
                        </Typography>
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    cartCheckout: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(actionCreators.removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);