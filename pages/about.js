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
                    <img src="/img/avatar.jpg"/>
                    <div className="avatarText">
                        <div>
                            My name is Daniel Schmitz and I'm a SAP Full Stack Developer at <a
                            href="https://www.gicom.org/en/" target="_blank">gicom GmbH</a> near Cologne, Germany.
                        </div>
                    </div>
                </div>
                <h6>Studies</h6>
                <p>
                    After graduating with a Bachelor of Science degree in Business IT, I started a Master's
                    degree in IT Management at the University of Münster with a focus on Data Science.
                </p>
                <h6>Hobbies</h6>
                <p>
                    In my free time however, I'm a passionate Music Producer & DJ but also interested in
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
            
            
            img {
                border-radius: 10rem;
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