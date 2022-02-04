import '../styles/base.css'
import '../styles/global.css'
// import '../components/Header.css'

function MyApp({
    Component,
    pageProps
}) {
    return <Component {
        ...pageProps
    }
    />
}

export default MyApp
