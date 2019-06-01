import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import BackButton from '../layout/BackButton';
import CartSummary from './CartSummary';
import CartSubmit from './CartSubmit';

const Cart = () => {  
    const styles = makeStyles(({
        wrapper: {
            margin: '4%'
        },
    }));

    const classes = styles();

    return (
        <Grid container spacing={5} className={classes.wrapper}>
            <CartSummary/>
            <CartSubmit />
            <Link to="/shopping-cart">
                <BackButton />
            </Link>
        </Grid>
    )
}

export default Cart;