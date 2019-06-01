import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button, Fab, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ArrowBack from '@material-ui/icons/ArrowBack';
import * as actionCreators from '../../store/actions/index';

const theme = createMuiTheme({
    spacing: 2
})

const styles = makeStyles(({
    wrapper: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    select: {
        width: 'auto',
        margin: theme.spacing(2),
    },
    backButton: {
        position: 'fixed',
        bottom: 0,
        left: 1,
        margin: '25px'
    }
})); 

const qty = [];

for(let i = 1; i <= 5; i++){
    qty.push({label: i, value: i});
}

const ItemInfo = (props) => {
    const [amount, setAmount] = useState(0);
    const classes = styles();
    const { item } = props

    const handleChange = e => {
        setAmount(e.target.value)
    }

    const itemInfo = item ? (
        <div className={classes.itemWrapper}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <hr/>
            <Select
                className={classes.select}
                label="Qty"
                value={amount}
                onChange={handleChange}
            >
                {qty.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <Button size="small" color="primary" onClick={() => {
                props.onAddItemToCart(item, amount);
                setAmount(0);
                }}>
                <ShoppingCart/>
                Add to Cart
            </Button>
        </div>
        
    ) : (<p>none</p>);
    return (
        <React.Fragment>
            <Link to="/shopping-cart">
                <Fab variant="contained" color="secondary" className={classes.backButton}>
                    <ArrowBack/>
                </Fab>
            </Link>
            <Grid container className={classes.wrapper}>
                {itemInfo}
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        item: state.item.items.find(item => item.id === id )
    }
}

const mapDispatchToProps = dispatch => ({
    onAddItemToCart: (item, itemQty) => dispatch(actionCreators.addToCart({item, qty: itemQty})),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);