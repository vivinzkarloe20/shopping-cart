import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Box, Button, Dialog, Divider, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as actionCreators from '../../store/actions/index';

const CartSubmit = (props) => {

    const styles = makeStyles(({
        checkout: {
            padding: '15px',
        },
        total: {
            marginLeft: 'auto',
        },
        totalBox: {
            marginTop: '15px',
            marginBottom: '15px',
        },
        checkoutBtn: {
            marginLeft: 'auto',
        },
        flexBtn: {
            display: 'flex',
        }
    }));

    const classes = styles();

    const { cartCheckout } = props;
    const [toggleCheckout, setToggleCheckout] = useState(false)

    const handleClose = () => {
        setToggleCheckout(false)
    }

    const handleSubmit = () => {
        if(cartCheckout.totalQty > 0) {
            props.history.push('/');
            alert('You have successfully checked out! Thanks for shopping.');
            props.checkout();
        }else{
            alert('You cannot checkout when the cart is empty.');
            setToggleCheckout(false);
        }
    }

    return (
        <React.Fragment>
             <div>
                <Dialog
                    open={toggleCheckout}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Checkout Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to checkout now?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Grid item md={3} xs={12}>
                <Paper className={classes.checkout}>
                    <Typography align="center" variant="h4" component="h1" gutterBottom="true">Checkout</Typography>
                    <Divider />
                    <Box display="flex" flexDirection="row" className={classes.totalBox}>
                        <Box variant="h5">
                            <Typography>
                                Total: 
                            </Typography>
                        </Box>
                        <Box className={classes.total} variant="h6">
                            <Typography color="primary" variant="h6" component="body1">
                                ${cartCheckout.totalPrice.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                    <div className={classes.flexBtn}>
                        <Button variant="outlined" color="primary" onClick={() => setToggleCheckout(true)} className={classes.checkoutBtn}>
                            <Typography variant="body1">
                                Confirm checkout
                            </Typography>
                        </Button>
                    </div>
                </Paper>
            </Grid>
            
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    cartCheckout: state.cart
})

const mapDispatchToProps = dispatch => ({
    checkout: () => dispatch(actionCreators.checkout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartSubmit));