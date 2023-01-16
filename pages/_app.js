import '../css/litera.css';
import '../css/v2.css';

import {Open_Sans, Syncopate} from '@next/font/google';

const openSans = Open_Sans({subsets: ['latin']});
const syncopate = Syncopate({
    weight: ['400', '700'],
    subsets: ['latin']
});

export default function MyApp({Component, pageProps}) {
    return <>
        <style jsx global>{`
          html {
            font-family: ${openSans.style.fontFamily};
            font-weight: 500;
          }
          
          h1, h2, h3, h4, h5 {
            font-family: ${syncopate.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
    </>
}