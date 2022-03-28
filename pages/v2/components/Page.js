import Header from "./Header";
import Includes from './includes/Includes';
import Title from "./includes/Title";
import Background from "./Background";
import Button from "./Button";
import Section from "./Section";

const Page = props => (
    <>
        <Background backdrop={props.backdrop}/>
        <div className="page">
            <Title page={props.page}/>
            <Includes/>
            <Section maxWidth={props.navBack}>
                <h1>{props.page}</h1>
                {props.children}
                <div className={props.navBack ? "buttonWrapper" : "hidden"}>
                    <Button emphasized={false} href={"/v2"}>Back</Button>
                </div>
            </Section>
            <style jsx>{`
              .hidden {
                display: none;
              }

              .buttonWrapper {
                width: 100%;
                display: flex;
                justify-content: end;
              }

              .content {
                height: 100%;
              }

              .page {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 0 15%;
                overflow-y: auto;
              }

              @media (max-width: 2000px) {
                .page {
                  padding: 0 12%;
                }
              }
              @media (max-width: 1850px) {
                .page {
                  padding: 0 11%;
                }
              }
              @media (max-width: 1500px) {
                .page {
                  padding: 0 10%;
                }
              }
              @media (max-width: 1260px) {
                .page {
                  padding: 0 150px;
                }
              }
              @media (max-width: 1080px) {
                .page {
                  padding: 0 100px;
                }
              }
              @media (max-width: 768px) {
                .page {
                  padding: 0 50px;
                }
              }

            `}</style>
        </div>
    </>
);

export default Page;