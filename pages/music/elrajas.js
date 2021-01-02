import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Elrajas"/>
        <h1>Elrajas</h1>
        <h2 className="subtitle">Organica, Tribal and Cyber Techno</h2>
        <div className="description">
            <img src="/img/music/elrajas.jpg"/>
            <div className="socialIcons">
                <SocialIcon spotify="https://open.spotify.com/artist/1Dtnpnv1YJ5sMz2cV1yOy6?si=7jb9q03oQWab7GNoHIyueQ" size="2x"/>
                <SocialIcon soundcloud="https://www.soundcloud.com/elrajas" size="2x"/>
                <SocialIcon mixcloud="https://www.mixcloud.com/elrajas" size="2x"/>
                <SocialIcon instagram="https://www.instagram.com/elrajasmusic" size="2x"/>
                <SocialIcon facebook="https://www.facebook.com/elrajasmusic" size="2x"/>
            </div>
            Elrajas was created in 2018 for Techno music with tribal and world music influences.
        </div>
    </MusicPage>
);

export default Index;