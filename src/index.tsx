import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string
    text: string
}

const Title = (props: TitleProps) => {
    return (
        <h1>
            {props.text} {props.title}
        </h1>
    )
}

const Content = () => {
    return (
        <>
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
        </>
    )
}

const App = () => {
    return (
        <>
            <Title text="Hello" title="React" />
            <Title text="Hi" title="About" />
            <Title text="Bye-bye" title="Bla-bla" />

            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
