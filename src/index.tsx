import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX
// const h1 = <h1 id="title" className="test">Hello world</h1>

//without jsx
// const h1 = React.createElement(
//     'h1',
//     { id: 'title', className: 'test' },
//     'Hello React'
// )

//PascalCase

const Title = () => {
    return <h1>Hello React.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem aliquid repudiandae, quo iure, necessitatibus
                consequuntur reiciendis ipsa exercitationem mollitia voluptate
                doloribus nam? Laudantium nulla iste neque, et dolores expedita
                nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                vitae eum magnam ipsam nihil repellat sequi, corporis odit
                consequuntur neque hic est error commodi eligendi ea
                perspiciatis amet officiis harum.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Title />
            <Content />
        </React.Fragment>
    )
}

// function App() {
//     return (
//         <div>
//             <h1>Hello React.js</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Voluptatem aliquid repudiandae, quo iure, necessitatibus
//                 consequuntur reiciendis ipsa exercitationem mollitia voluptate
//                 doloribus nam? Laudantium nulla iste neque, et dolores expedita
//                 nisi.
//             </p>
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
