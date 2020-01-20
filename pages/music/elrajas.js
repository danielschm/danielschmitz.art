import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons/faMixcloud";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";

import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage>
        <Title page="Elrajas"/>
        <Container className="text-light">
            <h1>Nitamas</h1>
            <h2 className="subtitle">Organica & Tribal Techno</h2>
            <div className="description">
                <img src="/img/music/elrajas.jpg"/>
                <div className="socialIcons">
                    <a href="https://www.soundcloud.com/elrajas" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
                    </a>
                    <a href="https://www.mixcloud.com/elrajas" target="_blank">
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/elrajasmusic" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/elrajasmusic" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                </div>
                <br/>
                Elrajas was created in 2018 for Techno music with tribal and world music influences.
            </div>
        </Container>
    </MusicPage>
);

export default Index;