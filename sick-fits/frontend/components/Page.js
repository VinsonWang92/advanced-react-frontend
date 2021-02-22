import Header from './Header'

export default function page ({children, cool}) {
    return (
    <div>
        <Header />
        <h2>I am the page component</h2>
        {children}
        {cool}
    </div>
    )
}