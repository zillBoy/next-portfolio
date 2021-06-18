import Image from 'next/image'
import Layout from '../components/Layout'
import ErrorPage from './_error';

const About = props => {

    const { user, statusCode } = props;

    if (statusCode) {
        return <ErrorPage statusCode={statusCode} />
    }

    return (
        <Layout title="About">
            <p>{user.name}</p>
            <Image src={user.avatar_url} width={150} height={150} alt="Read" />
        </Layout>
    )
}

export default About

About.getInitialProps = async () => {
    const url = 'https://api.github.com/users/zillBoy'
    const res = await fetch(url)
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()
    
    return {user: data, statusCode}
}