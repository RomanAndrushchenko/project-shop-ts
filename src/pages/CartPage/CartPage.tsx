import { Typography } from '@mui/material'
import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: ProductsProps }
}
const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Typography variant="h4" style={{ margin: '30px 0' }}>
                Cart
            </Typography>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:
                        {productsInCart[parseInt(productId)]}:{' '}
                        {productsObject[parseInt(productId)].price}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
            </div>
        </div>
    )
}
export default CartPage
