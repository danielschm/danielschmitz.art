import Title from "../components/includes/Title";

import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";
import Link from "next/link";

const Index = () => (
    <MusicPage>
        <Title page="Film Score"/>
        <h1>Daniel Schmitz</h1>
        <h2 className="subtitle">Film Score</h2>
        <div className="socialIcons">
            <SocialIcon spotify="https://open.spotify.com/artist/3mLcEp0Na8mP6ZyX7abcSG?si=uQU5lS8QTyi32LjO1axCHg"
                        size="2x"/>
            <SocialIcon soundcloud="https://www.soundcloud.com/danielschmitzmusic" size="2x"/>
            <SocialIcon facebook="https://www.facebook.com/danielschmitzmusic" size="2x"/>
            <SocialIcon youtube="https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw" size="2x"/>
        </div>
        <div className="description">
            <img src="/img/music/dsm.jpg"/>
            As the artist "Daniel Schmitz" I'm sharing my film score compositions. I especially like composing
            Fantasy, Celtic and Emotional Symphonic Orchestral Music.<br/>
            For the last {new Date().getFullYear() - 2014} years I have been involved in <Link href="/portfolio"
                                                                                               passHref><a>film
            projects</a></Link> where I have produced the score or been responsible for the sound design and sound
            mixing.
        </div>
    </MusicPage>
);

export default Index;