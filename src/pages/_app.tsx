import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
