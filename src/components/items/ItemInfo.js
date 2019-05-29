import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ArrowBack from '@material-ui/icons/ArrowBack';
import * as actionCreators from '../../store/actions/index';


const styles = makeStyles(theme => ({
    wrapper: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
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
        <React.Fragment>
            <Typography>{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <hr/>
            <TextField
                select
                id="outlined-adornment-amount"
                className={classes.textField}
                variant="outlined"
                label="Qty"
                value={amount}
                onChange={handleChange}
            >
                {qty.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button size="small" color="primary" onClick={() => {
                this.props.onAddItemToCart(item, amount);
                setAmount(0);
                }}>
                <ShoppingCart/>
                Add to Cart
            </Button>
        
        </React.Fragment>
        
    ) : (<p>none</p>);
    return (
        <React.Fragment>
            <Link to="/">
                <Typography>
                <ArrowBack/>
                    Return to Items
                </Typography>
            </Link>
            <Grid container spacing={40} className={classes.wrapper}>
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