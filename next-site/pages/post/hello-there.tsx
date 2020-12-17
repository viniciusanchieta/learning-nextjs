import Image from 'next/image';
import Navigation from '@components/navigation';

const Hello = () => (
    <article>
     <Navigation />
        <h1>Hello There!</h1>
        <Image src="/posts/hello-there/img.jpeg" 
        width={600}
        height={340}
        />
    </article>
)

export default Hello;