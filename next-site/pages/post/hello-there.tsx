import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@components/navigation';

const Hello = () => (
    <>
        <Head>
            <title>Hello There :: My Blog</title>
            <meta property="og:title" content="Hello There :: My Blog"/>
        </Head>
        <article>
            <Navigation />
            <h1>Hello There!</h1>
            <Image src="/posts/hello-there/img.jpeg"
                width={600}
                height={340}
            />
        </article>
    </>
)

export default Hello;