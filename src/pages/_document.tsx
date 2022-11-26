import { Html, Head, Main, NextScript } from "next/document";
import Document from 'next/document';
import { getCssText } from "../styles";


export default class CustomDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />

                    <title>Interbank</title>

                    <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}