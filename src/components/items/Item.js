import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/styles';
import * as actionCreators from '../../store/actions/index'

const styles = makeStyles(theme => ({
    cardContent: {
        display: 'flex',
    },
    cardActions: {
        marginLeft: '10px',
    },
    textField: {
        width: 'auto',
    },
    cardItem: {
        margin: '10px'
    }
}));

const qty = [];

for(let i = 1; i <= 5; i++){
    qty.push({label: i, value: i});
}

const Item = props => {
    const [ amount, setAmount ] = useState(0);
    const  {item } = props;
    const classes = styles();

    const handleChange = e => {
        setAmount(e.target.value)
    }

    return(
        <Grid item md={3} sm={6}>
            <Card className={classes.cardItem}>
                <CardActionArea>
                    <Link to={`/item/${item.id}`}>
                        <CardMedia 
                            component="img"
                            alt="image"
                            height="140"
                            image="https://dummyimage.com/250x250/858585/fff"
                            title="sample image"
                        />
                    </Link>
                </CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography component="p">
                        ${item.price}
                    </Typography>
                </CardContent>
                <div className={classes.cardContent}>
                    <CardActions className={classes.cardActions}>
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
                            props.onAddItemToCart(item, amount);
                            setAmount(0);
                            }}>
                            <ShoppingCart/>
                            Add to Cart 
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => ({
    onAddItemToCart: (item, itemQty) => dispatch(actionCreators.addToCart({item, qty: itemQty})),
})

export default connect(null, mapDispatchToProps)(Item);