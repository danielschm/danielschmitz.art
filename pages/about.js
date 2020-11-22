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
                <h1>About</h1>
                <div className="avatar">
                    <img src="/img/avatar2.jpg"/>
                    <div className="avatarText">
                        <div>
                            My name is Daniel Schmitz and I'm a <b>Software Developer</b> and <br/><b>Music
                            Producer</b> living in Cologne, Germany.
                        </div>
                    </div>
                </div>
                <h6>Education</h6>
                <p>
                    <ul className="education">
                        <li><strong>Bachelor of Science</strong>, Business Information Technology <br/><a
                                                                                         href="https://www.fhdw.de/"
                                                                                         target="_blank">FHDW
                            Fachhochschule der Wirtschaft</a></li>
                        <li><strong>University Certificate</strong>, Data Science<br/><a
                                                                        href="https://weiterbildung.uni-muenster.de/"
                                                                        target="_blank">WWU Universität Münster</a></li>
                        <li><strong>Master of Science</strong> (2021), Information Management <br/><a
                            href="https://weiterbildung.uni-muenster.de/"
                            target="_blank">WWU Universität Münster</a></li>
                    </ul>
                </p>
                <h6>Hobbies</h6>
                <p>
                    In my free time, I'm a passionate Music Producer & DJ but also interested in
                    all kinds of creative work.
                    For almost 10 years I have been working as a music producer and audio engineer on several
                    projects including <Link href="/portfolio" passHref><a>short films and YouTube
                    videos</a></Link>. But I've spent most of my time with creating music for my various 'artist
                    aliases' which you can discover in the <Link href="/music/novah" passHref><a>music
                    area</a></Link> of this website.
                </p>
            </CustomContainer>
        </Container>
        <style jsx>{`
            .avatar {
                display: flex;
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
                display: flex;
                align-items: center;
            }
            
            .education li {
                line-height: 1.3rem;
                margin-bottom: 1.3rem;
            }
            
            .education a {
                font-size: 0.9rem;
            }
            
            img {
                border-radius: 0.4rem;
                height: 10rem;
                width: 10rem;
                min-width: 10rem;
                min-height: 10rem;
                float: left;
                margin-right: 2rem;
                margin-bottom: 1.5rem;
            }
        `}</style>
    </Page>
);

export default Index;