import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            <Head key={'1'}>
                <title>Vlook</title>
                <meta name="description" content="Real Estate App" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.webmanifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
            </Head>
            <div className="w-screen h-screen">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
