import { Card, CardContent, Grid, Button } from '@mui/material'
import { ProductsProps } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product: ProductsProps
    productCount: number
    removeProductFromCart: (id: number) => void
}
const CartProductsListitemextended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListitemextended
