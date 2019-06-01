import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/styles';
import * as actionCreators from '../../store/actions/index';

const theme = createMuiTheme({
    spacing: 2
})

const styles = makeStyles(({
    cardContent: {
        display: 'flex',
    },
    cardActions: {
        marginLeft: '10px',
    },
    select: {
        // width: 'auto',
        height: 'auto',
        margin: theme.spacing(4),
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
                    <Link to={`shopping-cart/item/${item.id}`}>
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