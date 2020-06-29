import Document, { Head, Main,  NextScript} from 'next/document';

class myDocument extends Document {
    render() {
        return(
            <html lang="en">
                <Head>
                    <meta name="description" content="Portfolio Website" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, unfollow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Muli:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />                </Head> 
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default myDocument;