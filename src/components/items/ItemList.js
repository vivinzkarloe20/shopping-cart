import React, { Component } from 'react';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Item from './Item';

const styles = theme => ({
    wrapper: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 'auto',
    }
}); 

class ItemList extends Component {
    render(){
        const { items, classes } = this.props;

        const itemList = items.length ? (
            items.map(item => { 
                return(
                    <Item item={item} key={item.id}/>
                )
            })
        ) : (
            <p>No Items Found!</p>
        )

        return(
            <Grid container spacing={40} className={classes.wrapper}>
                {itemList}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    items: state.item.items
})

export default connect(mapStateToProps)(withStyles(styles)(ItemList));