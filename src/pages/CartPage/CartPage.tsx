import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import { Typography, Grid } from '@mui/material'
import CartProductsListitemextended from 'components/CartProductsList/CartProductsListitemextended'
import { useAppSelector } from 'redux/hook'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography variant="h4" style={{ margin: '30px 0' }}>
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListitemextended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
