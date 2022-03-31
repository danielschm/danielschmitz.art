import Link from 'next/link';
import Includes from './includes/Includes';
import Title from "./includes/Title";
import Background from "./Background";
import Button from "./Button";
import Section from "./Section";
import Footer from "./Footer";

const Page = props => (
    <>
        <Background backdrop={props.backdrop}/>
        <div className="page">
            <Title page={props.page}/>
            <Includes/>
            <div className="content">
                <Section maxWidth={props.navBack}>
                    <h1>{props.page}</h1>
                    {props.children}
                    <div className={props.navBack ? "buttonWrapper" : "hidden"}>
                        <Button emphasized={false} href={typeof (props.navBack) === 'string' ? props.navBack : "/"}>
                            Back
                        </Button>
                    </div>
                </Section>
            </div>
            <Footer/>
        </div>
        <style jsx>{`
          .hidden {
            display: none;
          }

          h1 {
            position: sticky;
          }

          .buttonWrapper {
            width: 100%;
            display: flex;
            justify-content: end;
          }

          .page {
            height: 100%;
            display: grid;
            grid-template-rows: 1fr;
          }

          .content {
            height: 100%;
            padding: 0 15%;
          }

          @media (max-width: 1500px) {
            .content {
              padding: 0 10%;
            }
          }

          @media (max-width: 1260px) {
            .content {
              padding: 0 150px;
            }
          }

          @media (max-width: 1080px) {
            .content {
              padding: 0 100px;
            }
          }

          @media (max-width: 768px) {
            .content {
              padding: 0 50px;
            }
          }

        `}</style>
    </>
);

export default Page;