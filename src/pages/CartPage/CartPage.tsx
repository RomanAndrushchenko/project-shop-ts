import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import { Typography, Grid } from '@mui/material'
import CartProductsListitemextended from 'components/CartProductsList/CartProductsListitemextended'

type Props = {
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
}
const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography variant="h4" style={{ margin: '30px 0' }}>
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListitemextended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
