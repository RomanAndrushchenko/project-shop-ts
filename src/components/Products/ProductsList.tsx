import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem title="iPhone X" ram="256 GB" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem title="iPhone XS" ram="128 GB" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem title="iPhone 12" ram="64 GB" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem title="iPhone 14 PRO" ram="512 GB" />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
