import PortfolioReference from "./components/PortfolioReference";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Page from "./components/Page";
import Title from "./components/includes/Title";

const Index = () => (
    <Page>
        <Title page="Portfolio"/>
        <Container>
            <h1>Portfolio</h1>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="film production"
                        title="Cut & Grading"
                        text="The music video for 'Fatal Foolness' by Geocentric Fools"
                        button="Watch on YouTube"
                        image="img/portfolio/fatalfoolness.jpg"
                        link="https://www.youtube.com/watch?v=gxuV-gFBHLw"
                        year="2021"
                    />
                </Col>
                <Col>
                    <PortfolioReference
                        tag="film production"
                        title="Scoring"
                        text="Composition of film score and audio mix for the Singold Whisky advertising film"
                        button="Watch on Vimeo"
                        image="img/portfolio/whisky.jpg"
                        link="https://vimeo.com/530317325"
                        year="2020"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="film production"
                        title="Sound Design"
                        text="Audio mix & production of sound design for the CGI short film 'Heaven and Earth'"
                        button="Watch on YouTube"
                        image="img/portfolio/heavenandearth.jpg"
                        link="https://www.youtube.com/watch?v=0yyJm-L-W5w&"
                        year="2016"
                    />
                </Col>
                <Col>
                    <PortfolioReference
                        tag="film production"
                        title="Scoring"
                        text="Composition of film score and audio mix for 'Protectors of the Earth' (~1m Views)"
                        button="Watch on YouTube"
                        image="img/portfolio/legomovie.jpg"
                        link="https://www.youtube.com/watch?v=zDKUIaeSmow&"
                        year="2015"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Music Production"
                        text="For the German Science YouTuber 'Doktor Whatson'"
                        button="Watch on YouTube"
                        image="img/portfolio/doktorwhatson.jpg"
                        link="https://www.youtube.com/c/doktorwhatson"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Live Performance"
                        text="This is the video of the live performance of my song 'Sandbox'"
                        button="Listen on YouTube"
                        image="img/portfolio/sandbox.jpg"
                        link="https://www.youtube.com/watch?v=JK5B2i9CdXQ"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="music"
                        title="Video & Music Production"
                        text="Production of the music video for my remix of 'In My Head' by Virtual Riot"
                        button="Listen on YouTube"
                        image="img/portfolio/inmyhead.jpg"
                        link="https://www.youtube.com/watch?v=OepMw40zJRo"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="Castle Wars on Node.js"
                        text="Multiplayer card game using WebSocket technology"
                        button="Download on GitHub"
                        image="img/portfolio/castlewars.jpg"
                        link="https://www.github.com/danielschm/castlewars"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="Web Development"
                        text="www.geocentricfools.com created by using Next.js, React and Bootstrap"
                        button="View Website"
                        image="img/portfolio/geocentricfools.com.jpg"
                        link="https://geocentricfools.com"/>
                </Col>
                <Col>
                    <PortfolioReference
                        tag="dev"
                        title="My GitHub"
                        text="Small random-purpose projects can be found here"
                        button="Open GitHub"
                        image="img/portfolio/github.jpg"
                        link="https://github.com/danielschm"/>
                </Col>
            </Row>
        </Container>
    </Page>
);

export default Index;