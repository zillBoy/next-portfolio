/** @jsxImportSource theme-ui */
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children, title }) => (
    <div sx={{ variant: 'container.root' }}>
        <Head>
            <title>NextProgress</title>
        </Head>
        <header sx={{variant: 'container.header'}}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
            <Link href="/blog"><a>My Blog</a></Link> 
        </header>
        
        <h1>{title}</h1>
        {children}

        <footer sx={{variant: 'container.footer'}}>&copy; {new Date().getFullYear()}</footer>
    </div>
)

export default Layout