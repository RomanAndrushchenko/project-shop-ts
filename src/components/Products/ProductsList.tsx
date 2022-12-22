import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'
type ProductsProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}
type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                {productsArray.map(
                    ({ title, desc, type, capacity, price }: ProductsProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
