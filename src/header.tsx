import './header.scss'
const Content = () => {
    return (
        <div className="header">
            <img className="logo-img" src="/img/Logo.png" alt="" />
            <ul className="topmenu">
                <li>Home</li>
                <li>How it’s made?</li>
                <li>Our products</li>
                <li>Contact</li>
            </ul>
            <button className="btn-arrow">
                Buy now
                <img
                    className="arrow-right-img"
                    src="/img/arrow-right.png"
                    alt=""
                />
            </button>
        </div>
    )
}
export default Content
