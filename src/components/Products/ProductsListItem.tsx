import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}
const ProductsListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: Props) => {
    return (
        <Card className="product-list-item">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-desc">This is {desc}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity}
                </div>
                <div className="product-price">{price}</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
