import { Typography } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center">
                List of Products
            </Typography>
            <ProductList />
        </>
    )
}
export default Home
