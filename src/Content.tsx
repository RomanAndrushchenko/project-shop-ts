import classes from './Content.module.scss'
type Props = {
    p1: string
    p2: string
}
const Content = ({ p1, p2 }: Props) => {
    return (
        <>
            <p className={`${classes.tomato} ${classes['fz-50']}`}>
                <p>{p1}</p>
            </p>
            <p>{p2}</p>
        </>
    )
}
export default Content
