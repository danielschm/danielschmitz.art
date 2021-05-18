import Title from "../components/includes/Title";
import Container from "react-bootstrap/Container";
import MusicPage from "./MusicPage";
import SocialIcon from "../components/SocialIcon";

const Index = () => (
    <MusicPage>
        <Title page="Geocentric Fools"/>
        <h1>Geocentric Fools</h1>
        <h2 className="subtitle">Synth-Pop, Indie-Pop, 80s</h2>
        <div className="socialIcons">
            <SocialIcon spotify="https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK" size="2x"/>
            <SocialIcon soundcloud="https://www.soundcloud.com/geocentricfools" size="2x"/>
            <SocialIcon instagram="https://www.instagram.com/geocentricfools" size="2x"/>
            <SocialIcon facebook="https://www.facebook.com/geocentricfools" size="2x"/>
            <SocialIcon twitter="https://www.twitter.com/geocentricfools" size="2x"/>
            <SocialIcon youtube="https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw" size="2x"/>
        </div>
        <div className="description">
            <img src="/img/music/geocentricfools.jpg"/>
            Geocentric Fools is a Synth-Pop duo consisting of Matt Platypus and Dan Leo (me). <br/>
            This is my most recent project so feel free to read more about it at <a href="https://geocentricfools.com/about/us" target="_blank">www.geocentricfools.com</a>.
        </div>
    </MusicPage>
);

export default Index;