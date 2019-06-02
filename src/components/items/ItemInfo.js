import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import BackButton from '../layout/BackButton'
import Item from '../items/Item'
import * as actionCreators from '../../store/actions/index';

const theme = createMuiTheme({
    spacing: 4
})

const styles = makeStyles(({
    wrapper: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    itemWrapper: {
        padding: theme.spacing(4)
    },
    select: {
        width: 'auto',
        margin: theme.spacing(2),
    },
})); 

const qty = [];

for(let i = 1; i <= 5; i++){
    qty.push({label: i, value: i});
}

const ItemInfo = (props) => {
    const classes = styles();
    const { item } = props

    const itemInfo = item ? (
        <Item item={item} />
        
    ) : (
        <Paper className={classes.itemWrapper}>
            <Typography variant="h6" component="h1">
                Sorry, the item isn't available at the moment.
            </Typography>
        </Paper>
    );
    
    return (
        <React.Fragment>
            <Link to="/">
                <BackButton />
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