import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductListItem.scss'
type Props = { title: string; ram: string }
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product-list-item">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <p className="product-desc">This is {props.title}</p>
                <div className="product-features">
                    <span>Type:</span> phone
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {props.ram}
                </div>
                <div className="product-price">500$</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
