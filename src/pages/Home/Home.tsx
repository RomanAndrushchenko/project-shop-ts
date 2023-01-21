import { Typography } from '@mui/material'
import ProductList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

const Home = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: '40px' }}
            >
                List of Products
            </Typography>
            <ProductList />
            <Reviews />
        </>
    )
}
export default Home
