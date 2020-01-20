import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons/faMixcloud";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";

import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage>
        <Title page="Nitamas"/>
        <Container className="text-light">
            <h1>Nitamas</h1>
            <h2 className="subtitle">Oriental Dubstep & Trap</h2>
            <div className="description">
                <img src="/img/music/nitamas.jpg"/>
                <div className="socialIcons">
                    <a href="https://open.spotify.com/artist/0RBc8jcD57fGrJ3uXiwNFA?si=nfd-VB5UQsyPjYHMj6JL8w"
                       target="_blank">
                        <FontAwesomeIcon icon={faSpotify} size="2x"/>
                    </a>
                    <a href="https://www.soundcloud.com/nitamas" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
                    </a>
                    <a href="https://www.mixcloud.com/nitamas" target="_blank">
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/nitamasmusic" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/nitamasmusic" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.twitter.com/nitamasmusic" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    </a>
                </div>
                <br/>
                Nitamas was created in 2018 and includes everything concerned with Dubstep / Drum'n'Base / Trap / Bass
                Music combined with ethnic, oriental and asian sounds.
            </div>
        </Container>
    </MusicPage>
);

export default Index;