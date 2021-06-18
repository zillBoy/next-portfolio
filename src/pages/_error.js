import Layout from "../components/Layout"


const ErrorPage = ({ statusCode }) => {
    return (
        <Layout title="Error">
            <p>{statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Can't get that page, sorry!`}</p>
        </Layout>
    )
}

export default ErrorPage
