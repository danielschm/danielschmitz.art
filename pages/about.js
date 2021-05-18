import Page from "./components/Page";
import Title from "./components/includes/Title";

import Link from "next/link";

import ListGroup from "react-bootstrap/ListGroup";
import CustomContainer from "./components/CustomContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => (
    <Page>
        <Title page="About"/>
        <Container>
            <CustomContainer>
                <div className={"wrapper"}>
                    <h1>About</h1>
                    <div className="avatar">
                        <div className={"image"}>
                            <img src="/img/avatar2.jpg"/>
                        </div>
                        <div className="avatarText">
                            <div>
                                My name is Daniel Schmitz and I'm a <b>Product Owner</b> and <br/><b>Music
                                Producer</b> living in Cologne, Germany.
                            </div>
                        </div>
                    </div>
                    <div className={"text"}>
                        <h2>Education</h2>
                        <p>
                            <ul className="education">
                                <li><strong>Master of Science</strong> (2021), Information Management <br/><a
                                    href="https://weiterbildung.uni-muenster.de/"
                                    target="_blank">WWU Universität Münster</a></li>
                                <li><strong>University Certificate</strong>, Data Science<br/><a
                                    href="https://weiterbildung.uni-muenster.de/"
                                    target="_blank">WWU Universität Münster</a></li>
                                <li><strong>Bachelor of Science</strong>, Business Information Technology <br/><a
                                    href="https://www.fhdw.de/"
                                    target="_blank">FHDW
                                    Fachhochschule der Wirtschaft</a></li>
                            </ul>
                        </p>
                        <h2>Hobbies</h2>
                        <p>
                            In my free time, I'm a passionate Music Producer & DJ but also interested in
                            all kinds of creative work.
                            For almost 10 years I have been working as a music producer and audio engineer on several
                            projects including <Link href="/portfolio" passHref><a>short films and YouTube
                            videos</a></Link>. But I've spent most of my time with creating music for my various 'artist
                            aliases' which you can discover in the <Link href="/music" passHref><a>music
                            area</a></Link> of this website.
                        </p>
                    </div>
                </div>
            </CustomContainer>
        </Container>
        <style jsx>{`
            .avatar {
                position: relative;
                display: flex;
            }
            
            .wrapper {
                position: relative;
            }

            h2 {
                font-size: 1.5rem;
            }

            .text {
                position: absolute;
                top: 15rem;
                left: 0rem;
            }
            
            @media (max-width: 390px) {
                .avatar {
                    display: block; 
                }
                
                .avatar img {
                    float: none;
                }
            }
            
            .avatarText {
                border-top: 2px solid rgba(255,255,255,0.3);
                padding: 0.5rem 0 0 11rem;
                display: flex;
                align-items: center;
                width: 100%;
            }
            
            .education li {
                line-height: 1.3rem;
                margin-bottom: 1.3rem;
            }
            
            .education a {
                font-size: 0.9rem;
            }
            
            .avatar .image {
                position: absolute;
                top: 0;
                left: 0;
                border-top: 2px solid rgba(255,255,255, 0.8);
                height: 10rem;
                width: 10rem;
                min-width: 10rem;
                min-height: 10rem;
                float: left;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
            }
            
            .avatar .image img {
                width: 100%;
                height: 100%;
            }
            
        `}</style>
    </Page>
);

export default Index;