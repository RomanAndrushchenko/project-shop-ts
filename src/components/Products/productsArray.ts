
export type ProductsProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:ProductsProps[]=[
    {
    id:1,
    title:"iPhone X",
    desc:"This is iPhone X",
    type: "phone",
    capacity:"64",
    price:500,
    image:"/images/iphone-black.jpg"
},
{
    id:2,
    title:"iPhone XS",
    desc:"This is iPhone XS",
    type: "phone",
    capacity:"256",
    price:1000,
    image: "/images/iphone-silver.jpg"
},
{
    id:3,
    title:"iPhone 13 Pro",
    desc: "This is iPhone 13 Pro",
    type: "phone",
    capacity:"512",
    price:1500,
    image: "/images/iphone-pink.jpg"
},
{
    id:4,
    title:"iPhone 13",
    desc: "This is iPhone 13",
    type: "phone",
    capacity:"65",
    price:1000,
    image: "/images/iphone-blue.jpg"
},
{
    id:5,
    title:"iPhone 14",
    desc: "This is iPhone 14",
    type: "phone",
    capacity:"512",
    price:2000,
    image: "/images/iphone-green.jpg"
},
{
    id:6,
    title:"iPhone 12",
    desc: "This is iPhone 12",
    type: "phone",
    capacity:"128",
    price:500,
    image: "/images/iphone-purple.jpg"
},
]
export const getProductsObject = (array:ProductsProps[])=>array.reduce((object,product)=>({...object,[product.id]:product,}),{})
export default productsArray

