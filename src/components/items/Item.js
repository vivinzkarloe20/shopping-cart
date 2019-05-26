import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, MenuItem, TextField, Typography } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { withStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../store/actions/index'

const styles = theme => ({
    cardContent: {
        display: 'flex',
    },
    cardActions: {
        marginLeft: '10px',
    },
    textField: {
        width: 'auto',
    },
});

const qty = [];

for(let i = 1; i <= 5; i++){
    qty.push({label: i, value: i});
}




class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
        }
    }

    render(){
        const {item, classes} = this.props;
        // console.log(this.state.amount)

        const handleChange = e => {
            this.setState({
                amount: e.target.value
            })
        }

        return(
            <Grid item md={3} sm={6}>
                <Card className={classes.cardItem}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            alt="image"
                            height="140"
                            image="https://dummyimage.com/250x250/858585/fff"
                            title="sample image"
                        />
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
                                value={this.state.amount}
                                onChange={handleChange}
                            >
                                {qty.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button size="small" color="primary" onClick={() => {
                                this.props.onAddItemToCart(item, this.state.amount);
                                this.setState({
                                    amount: 0,
                                })
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
}

// const mapStateToProps = state => {
//     cart: state.cart
// }

const mapDispatchToProps = dispatch => ({
    onAddItemToCart: (item, itemQty) => dispatch(actionCreators.addToCart({item, qty: itemQty})),
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Item));