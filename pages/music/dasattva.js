import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons/faMixcloud";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";

import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage>
        <Title page="Dasattva"/>
        <Container className="text-light">
            <h1>Dasattva</h1>
            <h2 className="subtitle">Cinematic Goa & Psytrance</h2>
            <div className="description">
                <img src="/img/music/dasattva.jpg"/>
                <div className="socialIcons">
                    <a href="https://open.spotify.com/artist/13VjztEYAsdeFzhBfXC3RN?si=pyh1my8tT3yTUCTEKRCcjw" target="_blank">
                        <FontAwesomeIcon icon={faSpotify} size="2x"/>
                    </a>
                    <a href="https://www.soundcloud.com/dasattva" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
                    </a>
                    <a href="https://www.mixcloud.com/dasattva" target="_blank">
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/dasattva" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/dasattva" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.twitter.com/dasattva" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC0XCV9CaE3kTwpsZk0UeNSw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                    </a>
                </div>
                <br/>
                Dasattva was created in 2018 and includes everything concerned with Goa / Psy / Psytrance in combination
                with Film Score.
            </div>
        </Container>
    </MusicPage>
);

export default Index;