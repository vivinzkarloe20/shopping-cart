import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { Fab, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import Clear from '@material-ui/icons/Clear'
import * as actionCreators from '../../store/actions/index';

const CartSummary = ( props ) => {
    const theme = createMuiTheme({
        spacing: 1
    })

    const styles = makeStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
    });

    const classes = styles();
    const { cartCheckout } = props;

    const onRemoveFromCart = (id) => {
        props.removeFromCart(id);
    }

    return (
        <Grid item md={9} xs={12}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Name</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
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
                                    <TableCell align="right">
                                        <Fab size="small" color="secondary" onClick={() => onRemoveFromCart(cartItem)}>
                                            <Clear />
                                        </Fab>
                                    </TableCell>
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
    )
}

const mapStateToProps = (state) => ({
    cartCheckout: state.cart
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(actionCreators.removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);