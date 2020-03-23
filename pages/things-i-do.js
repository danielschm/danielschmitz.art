import Page from "./components/Page";
import Title from "./components/includes/Title";
import CustomContainer from "./components/CustomContainer";
import Link from "next/link";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => (
    <div>
        <Page>
            <Title page="Things I Do"/>
            <Container>
                <CustomContainer>
                    <h1>Things I Do</h1>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h6>SAP Development</h6>
                            <ul>
                                <li>
                                    <a href="https://ui5.sap.com" target="_blank">SAPUI5</a> - Web Framework

                                </li>
                                <li>
                                    <a href="https://experience.sap.com/fiori-design/" target="_blank">SAP Fiori</a> -
                                    SAP UX Design Guidelines
                                </li>
                                <li>
                                    ABAP OO
                                </li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Web Development</h6>
                            <ul>
                                <li>
                                    HTML5, CSS3, JavaScript (ES2017)
                                </li>
                                <li>
                                    <a href="https://nodejs.org/" target="_blank">Node.js</a> - JavaScript runtime
                                </li>
                                <li>
                                    <a href="https://nextjs.org/" target="_blank">Next.js</a> - React based framework
                                    for server-rendered websites
                                </li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Music Production</h6>
                            using Studio One 4. I'm been experienced in producing a wide range of Electronic Music
                            genres but I also produce film score. <Link href="/music/novah" passHref><a>Read
                            more...</a></Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>DJing</h6>
                            <a href="https://www.pioneerdj.com/de-de/product/all-in-one-system/archive/xdj-rx/black/overview/"
                               target="_blank">Pioneer XDJ-RX</a> - Goa/Psytrance, Techno/Techhouse, Dubstep/DnB
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Graphic Design</h6>
                            Social Media Design and Color Correction with Adobe Photoshop
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h6>Film Production</h6>
                            Adobe Premiere & Adobe After Effects
                        </ListGroup.Item>
                    </ListGroup>
                </CustomContainer>
            </Container>
        </Page>
        <style jsx>{`
            #list-custom {
                max-width: 20rem;
            }
        `}</style>
    </div>
);

export default Index;