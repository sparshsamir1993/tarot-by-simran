import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="app-wrapper">
            <Navbar />
            <Head>
                <title>Simran Brar | Tarot Readings & Mystical Insights</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Component {...pageProps} />
                <SpeedInsights />
                <Analytics />
            </main>
            <Footer />
        </div>
    );
}
