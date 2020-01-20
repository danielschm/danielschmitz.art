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
        <Title page="Geocentric Fools"/>
        <Container className="text-light">
            <h1>Geocentric Fools</h1>
            <h2 className="subtitle">Synth-Pop & Retrowave/80s</h2>
            <div className="description">
                <img src="/img/music/geocentricfools.jpg"/>
                <div className="socialIcons">
                    <a href="https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK" target="_blank">
                        <FontAwesomeIcon icon={faSpotify} size="2x"/>
                    </a>
                    <a href="https://www.soundcloud.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.twitter.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                    </a>
                </div>
                <br/>
                The Synth-Pop duo Geocentric Fools - Matt Platypus & Dan Leo combine the golden 80s sounds with modern
                Electronic elements to create a unique experience.
            </div>
        </Container>
    </MusicPage>
);

export default Index;