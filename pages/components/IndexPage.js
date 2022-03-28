import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./Header";
import Includes from './includes/Includes';

function Page(props) {
    return (
        <div className="page">
            <Includes/>
            <div className="bg"/>
            <Header className="transparent"/>
            <div className="padding-top">
                {props.children}
            </div>
            <style jsx>{`
            .padding-top {
                padding-top: 2rem;
            }
            
            .page {
                height: 100%;
            }
            
            .bg {
                z-index: -2;
                height: 100%;
                width: 100%;
                position: fixed;
                background-image: url("/img/background.jpg");
                background-position: 40% 80%;
                background-repeat: no-repeat;
                background-color: black;
                background-attachment: fixed;
            }
        `}</style>
        </div>
    )
}

export default Page;