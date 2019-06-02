import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/styles';
import * as actionCreators from '../../store/actions/index';



const Item = props => {
    const [ amount, setAmount ] = useState(0);
    const  { item } = props;
    
    const styles = makeStyles(({
        cardActions: {
            display: 'flex',
            marginLeft: '10px',
        },
        grouped: {
            marginLeft: 'auto',
        },
        cardItem: {
            margin: '10px'
        },
    }));

    const classes = styles();
    
    const qty = [];
    
    for(let i = 1; i <= 5; i++){
        qty.push({label: i, value: i});
    }

    const handleChange = e => {
        setAmount(e.target.value)
    }

    return(
        <Grid item md={4} sm={6}>
            <Card className={classes.cardItem}>
                <CardHeader
                    title={item.name}
                    subheader={'$ ' + item.price.toFixed(2)}
                />
                <CardActionArea>
                    <Link to={`/shop/item/${item.id}`}>
                        <CardMedia 
                            component="img"
                            alt="image"
                            height="250"
                            image={require('./assets/'+ item.name + '.jpg')}
                            title="sample image"
                        />
                    </Link>
                </CardActionArea>
                <CardContent>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, tenetur.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.grouped}>
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
                        <Button className={classes.AddToCartBtn} size="small" color="primary" onClick={() => {
                            props.onAddItemToCart(item, amount);
                            setAmount(0);
                            }}>
                            <ShoppingCart/>
                            Add to Cart 
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => ({
    onAddItemToCart: (item, itemQty) => dispatch(actionCreators.addToCart({item, qty: itemQty})),
})

export default connect(null, mapDispatchToProps)(Item);