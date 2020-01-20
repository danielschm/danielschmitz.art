import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage>
        <Title page="Film Score"/>
        <Container className="text-light">
            <h1>Film Score</h1>
            <h2 className="subtitle">Daniel Schmitz Music</h2>
            <div className="description">
                <img src="/img/music/dsm.jpg"/>
                <div className="socialIcons">
                    <a href="https://www.soundcloud.com/danielschmitzmusic" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/danielschmitzmusic" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                    </a>
                </div>
                <br/>
                As the artist "Daniel Schmitz" I'm sharing my film score compositions. I especially like composing
                Fantasy, Celtic and Emotional Symphonic Orchestral Music. My plan is to upload music more constantly
                in the future.
            </div>
        </Container>
    </MusicPage>
);

export default Index;