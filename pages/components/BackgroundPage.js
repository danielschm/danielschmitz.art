import Page from "./Page";
import Header from "./Header";

const BackgroundPage = props => (
    <Page>
        <div className="flex">
            <Header className="transparent"/>
            <div className="flexItem">
                {props.children}
            </div>
        </div>
        <style jsx>{`
            .flex {
                height: 100%;
                display: flex;
                flex-direction: column;
                background-image: url("/img/background-small.jpg");
                background-position: 40% 80%;
                background-repeat: no-repeat;
                background-color: var(--dark);
            }
            
            .flexItem {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding-top: 2rem;
            }
        `}</style>
    </Page>
);

export default BackgroundPage;