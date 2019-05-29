import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

class Cart extends Component {  
    render() {
        const classes = useStyles();
        const { cartCheckout } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartCheckout.map(cartItem => (
                        <TableRow key={cartItem.id}>
                        <TableCell component="th" scope="row">
                            {cartItem.name}
                        </TableCell>
                        <TableCell align="right">{cartItem.price}</TableCell>
                        <TableCell align="right">{cartItem.quantity}</TableCell>
                        <TableCell align="right"><Button>X</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    cartCheckout: state.cart.cart
})

export default connect(mapStateToProps)(Cart);