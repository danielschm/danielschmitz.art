import Page from "./components/Page";
import Banner from "./components/Banner";

import '../css/custom.css';
import Header from "./components/Header";

const Index = () => (
    <Page>
        <div className="flex">
            <Header className="transparent"/>
            <div className="flexItem">
                <Banner/>
            </div>
        </div>
        <style jsx>{`
            .flex {
                height: 100%;
                display: flex;
                flex-direction: column;
                background-image: url("img/background-small.jpg");
                background-position: 40% 80%;
                background-repeat: no-repeat;
                background-color: var(--dark);
            }
            
            .flexItem {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </Page>
);

export default Index;