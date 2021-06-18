/** @jsxImportSource theme-ui */
import Layout from "../components/Layout"
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { title } = router.query

    return (
        <Layout title={title}>
            <p sx={{width: ['90%', '80%']}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales justo et nibh congue, eget auctor nisl ultricies. Donec sit amet massa a nisl blandit mattis. Fusce feugiat, tellus sed pulvinar elementum, turpis ante condimentum odio, ac ornare diam dolor ut lectus. Pellentesque et mollis sapien, eu vehicula arcu. Curabitur fermentum lectus in lacus condimentum fermentum. Cras nec neque sodales, tincidunt velit eu, vulputate diam. Maecenas tellus lectus, auctor in posuere et, tincidunt quis nisi.</p>
        </Layout>
    )
}

export default Post
